const knex = require("../../../db/knex")
const sockets = require('../../../io/sockets')
const getPartidaIniciadaBySalaId = require('../../../db/getPartidaIniciadaBySalaId')
const criarPartida = require('../../../db/criarPartida')

const partida = async (req, res) => {
    const {salaId} = req.params

    const partidaIniciada = await getPartidaIniciadaBySalaId(salaId)
    if (partidaIniciada) {
        return res.status(400).json({status: false, message: 'partida já iniciada' })
    }
    const date = new Date()
    const dia = date.getDate()
    const mes = date.getMonth()

   const partida = await criarPartida(salaId, dia, mes)
   if(partida.err){
       return res.status(400).json({err: err.stack})
   }
   sockets.all.broadcast.emit('iniciar partida')
    res.json({ status: "ok" })
}

module.exports = partida