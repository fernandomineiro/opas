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
    for(const fila of filaDeCompras){
        await comprarCartelas({sala_id, membro_id: fila.membro_id, partida_id: fila.partida_id, qtd: fila.qtd})
            .catch(err => console.log("erro ao comprar cartelas", new Error(err)))
    }
}

const gerarLinhas = (bolasCompradas, bolasSorteadas) => {
    bolasCompradas = bolasCompradas.map(bola => {
        bolasSorteadas.includes(bola.numero)
        bola.checked = bolasSorteadas.includes(bola.numero)
        return bola
    })
    const linhas = _.chunk(bolasCompradas, 5)

    return linhas.reduce((acc, linha) => {
        const bolasSorteadasNaLinha = linha.filter(bola => bolasSorteadas.includes(bola.numero))
        const bolasFaltantesNaLinha = linha.filter(bola => !bolasSorteadas.includes(bola.numero))
        acc.push({
            cartela_id: linha[0].cartela_id,
            telefone: linha[0].telefone,
            linha,
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
            linha,
            totalSorteada: bolasSorteadasNaLinha.length,
            faltam: bolasFaltantesNaLinha.map(bola=>bola.numero).join(' '),
            ganhou: bolasSorteadasNaLinha.length === linha.length
        })
        return acc
    }, [])
}

const sendLinhasSorteada = (linhas, parar) => {
    if(parar) return false
    let response = false
    for(const linha of linhas){
        if(linha.ganhou){
            response = true
            sockets.io.to(linha.sala_id).emit('bateu linha', linha.cartela_id)
            if(sockets[linha.telefone]){
                sockets[linha.telefone].emit('bingo linha', linha)
            }
        }
    }
    return response
}

const sendCartelasSorteadas = (linhas, parar) => {
    if(parar) return false
    let response = false
    for(const linha of linhas){
        if(linha.ganhou){
            response = true
            sockets.io.to(linha.sala_id).emit('bingou', linha.cartela_id)
            if(sockets[linha.telefone]){
                sockets[linha.telefone].emit('voce ganhou', linha)
            }
        }
    }
    return response
}

const parseMelhoresLinhas = linhas => _.sortBy(linhas, 'totalSorteada').reverse().slice(0,5)

const sendMelhoresLinhas = linhas => {
    const group = _.groupBy(linhas, "telefone")
    const telefones = Object.keys(group)
    for(const telefone of telefones){
        if(sockets[telefone]){
            sockets[telefone].emit("melhores linhas", parseMelhoresLinhas(group[telefone]))
        }
    }
}

const sendMelhoresCartelas = cartelas => {
    const group = _.groupBy(cartelas, "telefone")
    const telefones = Object.keys(group)
    for(const telefone of telefones){
        if(sockets[telefone]){
            sockets[telefone].emit("melhores cartelas", parseMelhoresLinhas(group[telefone]))
        }
    }
}

const sendBola = (sala_id, bola) => {
    sockets.io.to(sala_id).emit('bola sorteada', bola)
}

const sortearBolas = async (sala_id, bolasSorteadasId, partida_id) => {
    const bolas = getBolas()
    await timer(config.tempoDeInicio)
    await comprarCartelasDaFila(sala_id)
    await removeFila(sala_id)
    const bolasCompradas = await getCartelasByMembros(partida_id)
    
    //const linhasDasCartelas = _.chunk(bolasCompradas, 5)
    
    const bolasSorteadas = []
    let pararDeVerificarLinha = false
    let pararDeVerificarBingo = false
    for (const bola of bolas) {
        bolasSorteadas.push(bola)
        await updateBolasSorteadas(bolasSorteadasId, JSON.stringify(bolasSorteadas))
        
        // TODO
        const linhas = gerarLinhas(bolasCompradas, bolasSorteadas)
        const cartelas = gerarCartelas(bolasCompradas, bolasSorteadas)
        const bateuLinha = sendLinhasSorteada(linhas, pararDeVerificarLinha)
        const bingou = sendCartelasSorteadas(cartelas, pararDeVerificarBingo)

        if(!pararDeVerificarLinha){
            sendMelhoresLinhas(linhas)
        }else{
            sendMelhoresCartelas(cartelas)
        }

        if(bateuLinha){
            pararDeVerificarLinha = true
            await timer(config.tempoBateuLinha)
        }

        if(bingou){
            break
        }

        sendBola(sala_id, bola)
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
    sockets.io.emit('iniciar partida')
    console.log('partida iniciada:', sala_id)
    sortearBolas(sala_id, bolasSorteadas.id, insertPartida.id)
    res.json({
        status: "ok"
    })
}

module.exports = partida