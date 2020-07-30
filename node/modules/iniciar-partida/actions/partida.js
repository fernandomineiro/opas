const sockets = require('../../../io/sockets')
const getPartidaIniciadaBySalaId = require('../../../db/getPartidaIniciadaBySalaId')
const criarPartida = require('../../../db/criarPartida')
const getBolas = require('../../../helpers/get-bolas')
const config = require('../../../config.json')
const setPartidaBySalaId = require('../../../db/set-partida-by-salaId')
const getFilaBySalaId = require('../../../db/get-fila-by-salaId')
const comprarCartelas = require('../../../db/comprar-cartelas')
const removeFila = require('../../../db/remove-fila')
const updateBolasSorteadas = require('../../../db/update-bolas-sorteadas')
const getCartelasByMembros = require('../../../db/get-cartelas-by-membros')
const _ = require('lodash')
const timer = interval => new Promise(resolve => setTimeout(resolve, interval))

const comprarCartelasDaFila = async (sala_id) => {
    const filaDeCompras = await getFilaBySalaId(sala_id)
    let total = 0
    for(const fila of filaDeCompras){
        total = total + fila.qtd
        await comprarCartelas({sala_id, membro_id: fila.membro_id, partida_id: fila.partida_id, qtd: fila.qtd})
            .catch(err => console.log("erro ao comprar cartelas", new Error(err)))
    }
    return total
}

const gerarLinhas = (bolasCompradas, bolasSorteadas) => {
    bolasCompradas = bolasCompradas.map(bola => {
        bolasSorteadas.includes(bola.numero)
        bola.checked = bolasSorteadas.includes(bola.numero)
        return bola
    })
    const cartelas = _.chunk(bolasCompradas, 15)
    
    const linhas = _.chunk(bolasCompradas, 5)

    return linhas.reduce((acc, linha) => {
        const bolasSorteadasNaLinha = linha.filter(bola => bolasSorteadas.includes(bola.numero))
        const bolasFaltantesNaLinha = linha.filter(bola => !bolasSorteadas.includes(bola.numero))
        
        acc.push({
            cartela_id: linha[0].cartela_id,
            telefone: linha[0].telefone,
            sala_id: linha[0].sala_id,
            linha,
            cartelas,
            totalSorteada: bolasSorteadasNaLinha.length,
            faltam: bolasFaltantesNaLinha.map(bola=>bola.numero).join(' '),
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
            linha,
            totalSorteada: bolasSorteadasNaLinha.length,
            faltam: bolasFaltantesNaLinha.map(bola=>bola.numero).join(' '),
            ganhou: bolasSorteadasNaLinha.length === linha.length,
        })
        return acc
    }, [])
}

const sendLinhasSorteada = (linhas, parar) => {
    
    if(parar) return false
    let response = false
    const bingouLinhas = linhas.filter(linha => linha.ganhou)
    if(bingouLinhas.length){
        if(sockets[bingouLinhas[0].telefone]){
            const cartelasPremiadas = bingouLinhas.map(linha => {
                linha.faltam = 'Linha!'
                return linha
            })
            sockets[bingouLinhas[0].telefone].emit('bingo linha', cartelasPremiadas)
        }
        sockets.io.to(bingouLinhas[0].sala_id).emit('bateram linha')
        response = true;
    }
    return response
}

const sendCartelasSorteadas = (linhas, parar) => {
    if(parar) return false
    let response = false
    const bingouCartela = linhas.filter(linha => linha.ganhou)
    if(bingouCartela.length){
        if(sockets[bingouCartela[0].telefone]){
            const cartelasPremiadas = bingouCartela.map(linha => {
                linha.faltam = 'Bingo!'
                return linha
            })
            sockets[bingouCartela[0].telefone].emit('voce ganhou', cartelasPremiadas)
        }
        sockets.io.to(bingouCartela[0].sala_id).emit('bingou')
        response = true
    }
    return response
}

const parseMelhoresLinhas = linhas => _.sortBy(linhas, 'totalSorteada').reverse().slice(0,5)

const sendMelhoresLinhas = (linhas, bolasCompradas) => {
    const group = _.groupBy(linhas, "telefone")
    const telefones = Object.keys(group)
    for(const telefone of telefones){
        let melhores = parseMelhoresLinhas(group[telefone])
        melhores = melhores.map(linha => {
            linha.cartelas = linha.cartelas.reduce((acc, cartela) => {
                const filtered = cartela.filter(cart => cart.cartela_id == linha.cartela_id)
                return [...acc, ...filtered.map(cartela => ({cartela_id: cartela.cartela_id, numero: cartela.numero}))]
            }, [])
            const bolasCompradasByTelefone = bolasCompradas.filter(bola => bola.telefone == telefone)
            linha.primeiroCartaoId = bolasCompradasByTelefone[0].cartela_id
            linha.ultimoCartaoId = bolasCompradasByTelefone[bolasCompradasByTelefone.length - 1].cartela_id
            return linha
        })
        if(sockets[telefone]){
            sockets[telefone].emit("melhores linhas", melhores)
        }
    }
}

const sendMelhoresCartelas = (cartelas, bolasCompradas) => {
    
    const group = _.groupBy(cartelas, "telefone")
    const telefones = Object.keys(group)
    for(const telefone of telefones){
        let melhores = parseMelhoresLinhas(group[telefone])
        const bolasCompradasByTelefone = bolasCompradas.filter(bola => bola.telefone == telefone)
        melhores = melhores.map(linha => {
            linha.primeiroCartaoId = bolasCompradasByTelefone[0].cartela_id
            linha.ultimoCartaoId = bolasCompradasByTelefone[bolasCompradasByTelefone.length - 1].cartela_id
            return linha
        })
        if(sockets[telefone]){
            sockets[telefone].emit("melhores cartelas", melhores)
        }
    }
}

const sendBola = (sala_id, bola, bolasSorteadas, totalCompradas) => {
    sockets.io.to(sala_id).emit('bola sorteada', {bola, sorteadas: bolasSorteadas, totalCompradas})
}

const sortearBolas = async (sala_id, bolasSorteadasId, partida_id) => {
    const bolas = getBolas()
    await timer(config.tempoDeInicio)
    const totalCompradas = await comprarCartelasDaFila(sala_id)
    await removeFila(sala_id)
    const bolasCompradas = await getCartelasByMembros(partida_id)
    
    //const linhasDasCartelas = _.chunk(bolasCompradas, 5)
    
    const bolasSorteadas = []
    let pararDeVerificarLinha = false
    let pararDeVerificarBingo = false
    for (const bola of bolas) {
        bolasSorteadas.push(bola)
        sendBola(sala_id, bola, bolasSorteadas, totalCompradas * 6)
        await updateBolasSorteadas(bolasSorteadasId, JSON.stringify(bolasSorteadas))
        
        // TODO
        const linhas = gerarLinhas(bolasCompradas, bolasSorteadas)
        const cartelas = gerarCartelas(bolasCompradas, bolasSorteadas)
        const bateuLinha = sendLinhasSorteada(linhas, pararDeVerificarLinha)
        const bingou = sendCartelasSorteadas(cartelas, pararDeVerificarBingo)

        if(!pararDeVerificarLinha && !bateuLinha){
            sendMelhoresLinhas(linhas, bolasCompradas)
        }else{
            sendMelhoresCartelas(cartelas, bolasCompradas)
        }

        if(bateuLinha){
            pararDeVerificarLinha = true
            await timer(config.tempoBateuLinha)
        }

        if(bingou){
            break
        }

        
        await timer(config.tempoDeSorteio)
    }
}

const partida = async (req, res) => {
    const {
        sala_id
    } = req.params
    const partidaIniciada = await getPartidaIniciadaBySalaId(sala_id)
    if (partidaIniciada) {
        return res.status(400).json({
            status: false,
            message: 'partida já iniciada'
        })
    }
    const date = new Date()
    const dia = date.getDate()
    const mes = date.getMonth()

    const insertPartida = await criarPartida(sala_id, dia, mes)
    
   const bolasSorteadas = await setPartidaBySalaId(sala_id, insertPartida.id)
    if (insertPartida.err) {
        return res.status(400).json({
            err: err.stack
        })
    }
    sockets.io.to(sala_id).emit('iniciar partida')
    console.log('partida iniciada:', sala_id)
    sortearBolas(sala_id, bolasSorteadas.id, insertPartida.id)
    res.json({
        status: "ok"
    })
}

module.exports = partida