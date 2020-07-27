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

const timer = interval => new Promise(resolve => setTimeout(resolve, interval))

const comprarCartelasDaFila = async (sala_id) => {
    const filaDeCompras = await getFilaBySalaId(sala_id)
    for(const fila of filaDeCompras){
        await comprarCartelas({sala_id, membro_id: fila.membro_id, partida_id: fila.partida_id, qtd: fila.qtd})
            .catch(err => console.log("erro ao comprar cartelas", new Error(err)))
    }
}

const sortearBolas = async (sala_id, bolasSorteadasId) => {
    const bolas = getBolas()
    await timer(config.tempoDeInicio)
    await comprarCartelasDaFila(sala_id)
    await removeFila(sala_id)
    const bolasSorteadas = []
    for (const bola of bolas) {
        bolasSorteadas.push(bola)
        await updateBolasSorteadas(bolasSorteadasId, JSON.stringify(bolasSorteadas))

        sockets.io.to(sala_id).emit('bola sorteada', bola)
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

    const isnertPartida = await criarPartida(sala_id, dia, mes)
    
   const bolasSorteadas = await setPartidaBySalaId(sala_id, isnertPartida.id)
    if (isnertPartida.err) {
        return res.status(400).json({
            err: err.stack
        })
    }
    sockets.io.emit('iniciar partida')
    console.log('partida iniciada:', sala_id)
    sortearBolas(sala_id, bolasSorteadas.id)
    res.json({
        status: "ok"
    })
}

module.exports = partida