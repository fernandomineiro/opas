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

    const premios = {
        acumulado: (sala.bingo + sala.acumulado) / qtdCartelas,
        bingo: sala.bingo / qtdCartelas,
        linha: sala.linha / qtdCartelas
    }

    const saldo = Number((membro.saldo + premios[premio]).toFixed())
    await alterarSaldo(membro.id, saldo)

    delete cartelasPremiadas.cartelas
    cartelasPremiadas.saldo = saldo
    const cartelas = cartelasPremiadas
    await knex('ganhadores')
        .insert({
            membro_id: membro.id,
            sala_id,
            partida_id,
            cartelas: JSON.stringify(cartelas),
            premio
        }).catch(err=>console.log(new Error(err)))
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
        if (sockets[bingouLinhas[0].telefone]) {
            let cartelasPremiadas = bingouLinhas.map(linha => {
                linha.faltam = 'Linha!'
                return linha
            })
            cartelasPremiadas = await premiar(cartelasPremiadas, 'linha')
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

const sendMelhoresLinhas = (linhas) => {
    const group = _.groupBy(linhas, "telefone")
    const telefones = Object.keys(group)
    const melhores20 = parseMelhoresLinhas(linhas)
    // const melhoresToSend = []
    for (const telefone of telefones) {
        let melhores = parseMelhoresLinhas(group[telefone]).slice(0,5)
        melhores = melhores.map(linha => {
            linha.cartelas = linha.cartelas.reduce((acc, cartela) => {
                const filtered = cartela.filter(cart => cart.cartela_id == linha.cartela_id)
                return [...acc, ...filtered.map(cartela => ({
                    cartela_id: cartela.cartela_id,
                    numero: cartela.numero
                }))]
            }, [])
            // const bolasCompradasByTelefone = group[telefone].filter(bola => bola.telefone == telefone)
            linha.primeiroCartaoId = group[telefone][0].cartela_id
            linha.ultimoCartaoId = group[telefone][group[telefone].length - 1].cartela_id
            return linha
        })
        // melhoresToSend.push(...melhores)
        const socket = sockets[telefone]
        const salaId = melhores[0].sala_id
        // const melhoresToSendSocket = melhores.filter((melhor, index) => index <= 5)
        if (socket && socket.sala_id == salaId) {
            sendLinhasSorteada(melhores)
            sockets[telefone].emit("melhores linhas", melhores)
        }
    }
    return melhores20
}

const sendMelhoresCartelas = (cartelas) => {

    const group = _.groupBy(cartelas, "telefone")
    const telefones = Object.keys(group)
    //const melhoresToSend = []
    const melhores20 = parseMelhoresLinhas(cartelas)
    for (const telefone of telefones) {
        let melhores = parseMelhoresLinhas(group[telefone]).slice(0,5)
        // const bolasCompradasByTelefone = bolasCompradas.filter(bola => bola.telefone == telefone)
        melhores = melhores.map(linha => {
            linha.primeiroCartaoId = group[telefone][0].cartela_id
            linha.ultimoCartaoId = group[telefone][group[telefone].length - 1].cartela_id
            return linha
        })
        //melhoresToSend.push(...melhores)
        const socket = sockets[telefone]
        const salaId = melhores[0].sala_id
       // const melhoresToSendSocket = melhores.filter((melhor, index) => index <= 5)
        if (socket && socket.sala_id == salaId) {
            sendCartelasSorteadas(melhores)
            sockets[telefone].emit("melhores cartelas", melhores)
        }
    }
    return melhores20
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
        bolasSorteadas.includes(bola.numero)
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