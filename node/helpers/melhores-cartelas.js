const sockets = require('../io/sockets')
const resetPartida = require('../db/reset-partida')
const _ = require('lodash')
const getSala = require('../db/get-sala')
const getMembroByTelefone = require('../db/get-membro-by-telefone')
const alterarSaldo = require('../db/alterar-saldo-by-membro')
const config = require('../config.json')
const getBolasSorteadas = require('../db/get-bolas-sorteadas-by-id')
const knex = require('../db/knex')


const parseMelhoresLinhas = linhas => _.sortBy(linhas, 'totalSorteada').reverse().slice(0, 20)

const timer = interval => new Promise(resolve => setTimeout(resolve, interval))

const premiarCartelas = async (cartelasPremiadas, premio, qtdCartelas) => {
    
    const {
        sala_id,
        telefone,
        partida_id
    } = cartelasPremiadas
    const sala = await getSala(sala_id)
        .catch(err => console.log("erro ao pegar sala: ", new Error(err)))
    const membro = await getMembroByTelefone(telefone)
        .catch(err => console.log('erro ao pegar membro:', new Error(err)))
    const bolasSorteadas = await getBolasSorteadas(partida_id)
        .catch(err => console.log('erro ao pegar bolas sorteadas', new Error(err)))

    premio = (premio == 'bingo' && bolasSorteadas.bolas.length <= sala.acumulado_ate) ?
        'acumulado' :
        premio

    const ganhador = await knex('ganhadores').select("ganhadores.id", "ganhadores.cartelas")
            .innerJoin('membro', 'membro.id', 'ganhadores.membro_id').where({premio, telefone, "ganhadores.partida_id": partida_id}).first()
            .then(data => (data)
                ? JSON.parse(data.cartelas).cartela_id == cartelasPremiadas.cartela_id
                : null)
    
    if(ganhador){
        cartelasPremiadas.saldo = membro.saldo
        return cartelasPremiadas
    }

    const premios = {
        acumulado: (sala.bingo + sala.acumulado) / qtdCartelas,
        bingo: sala.bingo / qtdCartelas,
        linha: sala.linha / qtdCartelas
    }

    const saldo = Math.floor(membro.saldo + premios[premio])
    await alterarSaldo(membro.id, saldo)

    cartelasPremiadas.saldo = saldo
    const cartelasOfCartelaPremiada = cartelasPremiadas.cartelas
    delete cartelasPremiadas.cartelas
    const cartelas = cartelasPremiadas
    await knex('ganhadores')
        .insert({
            membro_id: membro.id,
            sala_id,
            partida_id,
            cartelas: JSON.stringify(cartelas),
            premio
        }).catch(err=>console.log(new Error(err)))

    cartelasPremiadas.cartelas = cartelasOfCartelaPremiada
    return cartelasPremiadas
}

const premiar = async (cartelas, premio) => {
    console.log("total de cartelas vencedoras:", cartelas.length, premio)
    let newCartelas = []
    for (const cartela of cartelas) {
        const newCartela = await premiarCartelas(cartela, premio, cartelas.length)
        newCartelas.push(newCartela)
    }
    return newCartelas
}

const sendLinhasSorteada = async (linhas) => {
    let response = false
    const bingouLinhas = linhas.filter(linha => linha.ganhou)
    if (bingouLinhas.length) {
        let cartelasPremiadas = bingouLinhas.map(linha => {
            linha.faltam = 'Linha!'
            return linha
        })
        cartelasPremiadas = await premiar(cartelasPremiadas, 'linha')
        if(sockets.io){
            sockets.io.in(bingouLinhas[0].sala_id).emit('bateram linha', cartelasPremiadas)
        }
        response = true
        await timer(config.tempoBateuLinha)
    }
    return response
}

const sendCartelasSorteadas = async (linhas) => {
    let response = false
    const bingouCartela = linhas.filter(linha => linha.ganhou)
    if (bingouCartela.length) {
        if (sockets[bingouCartela[0].telefone]) {
            let cartelasPremiadas = bingouCartela.map(linha => {
                linha.faltam = 'Bingo!'
                return linha
            })
            cartelasPremiadas = await premiar(cartelasPremiadas, 'bingo')
            sockets.io.in(bingouCartela[0].sala_id).emit('bingou', cartelasPremiadas)
            await resetPartida(cartelasPremiadas[0].partida_id)
            //sockets[bingouCartela[0].telefone].emit('voce ganhou', cartelasPremiadas)
        }
        response = true
    }
    return response
}

const sendMelhoresLinhas = (linhas, bolasCompradas) => {
    const group = _.groupBy(linhas, "telefone")
    const telefones = Object.keys(group)
  
    for (const telefone of telefones) {
        const melhores5 = parseMelhoresLinhas(group[telefone]).slice(0,5)
        const melhores = melhores5.map(linha => {
            linha.cartelas = linha.cartelas.reduce((acc, cartela) => {
                const filtered = cartela.filter(cart => cart.cartela_id == linha.cartela_id)
                return [...acc, ...filtered.map(cartela => ({
                    cartela_id: cartela.cartela_id,
                    numero: cartela.numero
                }))]
            }, [])
            linha.linha = linha.linha.map(l=>({cartela_id: l.cartela_id, numero: l.numero}))
            const bolasCompradasByTelefone = bolasCompradas.filter(bola => bola.telefone == telefone)
            linha.primeiroCartaoId = bolasCompradasByTelefone[0].cartela_id
            linha.ultimoCartaoId = bolasCompradasByTelefone[bolasCompradasByTelefone.length - 1].cartela_id
            return linha
        })
       
        const socket = sockets[telefone]
        const salaId = melhores[0].sala_id
        if (socket && socket.sala_id == salaId) {
            sendLinhasSorteada(linhas)
            sockets[telefone].emit("melhores linhas", melhores)
        }
    }
    const parseRetorno = parseMelhoresLinhas(linhas)
        .map(linha => {
            linha.cartelas = null
            return linha
        })
    return parseRetorno
}

const sendMelhoresCartelas = (cartelas, bolasCompradas) => {

    const group = _.groupBy(cartelas, "telefone")
    const telefones = Object.keys(group)

    for (const telefone of telefones) {
        let melhores = parseMelhoresLinhas(group[telefone]).slice(0,5)
        const bolasCompradasByTelefone = bolasCompradas.filter(bola => bola.telefone == telefone)
        melhores = melhores.map(linha => {
            linha.primeiroCartaoId = bolasCompradasByTelefone[0].cartela_id
            linha.ultimoCartaoId = bolasCompradasByTelefone[bolasCompradasByTelefone.length - 1].cartela_id
            return linha
        })
      
        const socket = sockets[telefone]
        const salaId = melhores[0].sala_id
        
        if (socket && socket.sala_id == salaId) {
            sendCartelasSorteadas(cartelas)
            sockets[telefone].emit("melhores cartelas", melhores)
        }
    }
    return parseMelhoresLinhas(cartelas)
}

const gerarLinhas = (bolasCompradas, bolasSorteadas) => {
    bolasCompradas = bolasCompradas.map(bola => {
        bola.checked = bolasSorteadas.includes(bola.numero)
        return bola
    })

    const cartelas = _.chunk(bolasCompradas, 15)

    const linhas = _.chunk(bolasCompradas, 5)

    return linhas.reduce((acc, linha) => {
        const bolasSorteadasNaLinha = linha.filter(bola => bola.checked)
        const bolasFaltantesNaLinha = linha.filter(bola => !bola.checked)
      
        acc.push({
            cartela_id: linha[0].cartela_id,
            telefone: linha[0].telefone,
            sala_id: linha[0].sala_id,
            partida_id: linha[0].partida_id,
            linha,
            cartelas,
            totalSorteada: bolasSorteadasNaLinha.length,
            faltam: bolasFaltantesNaLinha.map(bola => bola.numero).join(' '),
            ganhou: bolasSorteadasNaLinha.length === linha.length
        })
        return acc
    }, [])
}

const gerarCartelas = (bolasCompradas, bolasSorteadas) => {
    bolasCompradas = bolasCompradas.map(bola => {
        bola.checked = bolasSorteadas.includes(bola.numero)
        return bola
    })
    const linhas = _.chunk(bolasCompradas, 15)

    return linhas.reduce((acc, linha) => {
        const bolasSorteadasNaLinha = linha.filter(bola => bolasSorteadas.includes(bola.numero))
        const bolasFaltantesNaLinha = linha.filter(bola => !bolasSorteadas.includes(bola.numero))
        acc.push({
            cartela_id: linha[0].cartela_id,
            telefone: linha[0].telefone,
            sala_id: linha[0].sala_id,
            partida_id: linha[0].partida_id,
            linha,
            totalSorteada: bolasSorteadasNaLinha.length,
            faltam: bolasFaltantesNaLinha.map(bola => bola.numero).join(' '),
            ganhou: bolasSorteadasNaLinha.length === linha.length,
        })
        return acc
    }, [])
}

module.exports = {
    linha: (bolasCompradas, bolasSorteadas) => sendMelhoresLinhas(gerarLinhas(bolasCompradas, bolasSorteadas), bolasCompradas),
    bingo: (bolasCompradas, bolasSorteadas) => sendMelhoresCartelas(gerarCartelas(bolasCompradas, bolasSorteadas), bolasCompradas)
}