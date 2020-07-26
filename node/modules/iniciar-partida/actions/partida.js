const sockets = require('../../../io/sockets')
const getPartidaIniciadaBySalaId = require('../../../db/getPartidaIniciadaBySalaId')
const criarPartida = require('../../../db/criarPartida')
const getBolas = require('../../../helpers/get-bolas')
const config = require('../../../config.json')

const timer = interval => new Promise(resolve => setTimeout(resolve, interval))

const sortearBolas = async sala => {
    const bolas = getBolas()
    await timer(config.tempoDeInicio)
    for(const bola of bolas){
        sockets.io.to(sala).emit('bola sorteada', bola)
        await timer(config.tempoDeSorteio)
    }
}

const partida = async (req, res) => {
    const {sala_id} = req.params
    const partidaIniciada = await getPartidaIniciadaBySalaId(sala_id)
    if (partidaIniciada) {
        return res.status(400).json({status: false, message: 'partida já iniciada' })
    }
    const date = new Date()
    const dia = date.getDate()
    const mes = date.getMonth()

   const partida = await criarPartida(sala_id, dia, mes)
   if(partida.err){
       return res.status(400).json({err: err.stack})
   }
   sockets.io.emit('iniciar partida')
   console.log('partida iniciada:', sala_id)
   sortearBolas(sala_id)
    res.json({ status: "ok" })
}

module.exports = partida