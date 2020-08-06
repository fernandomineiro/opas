const getPartidaIniciadaBySalaId = require("../../../db/getPartidaIniciadaBySalaId")
const criarPartida = require("../../../db/criarPartida")
const insertBolasSorteadas = require("../../../db/insert-bolas-sorteadas")
const sockets = require('../../../io/sockets')
const comprarCartelas = require("../../../db/comprar-cartelas")
const removeFila = require("../../../db/remove-fila")
const config = require('../../../config.json')
const getFilaBySalaId = require("../../../db/get-fila-by-salaId")

const comprarCartelasDaFila = async (sala_id, partida_id) => {
  const filaDeCompras = await getFilaBySalaId(sala_id)
  
  let total = 0
  for(const fila of filaDeCompras){
      total = total + fila.qtd
      await comprarCartelas({sala_id, membro_id: fila.membro_id, partida_id, qtd: fila.qtd})
          .catch(err => console.log("erro ao comprar cartelas", new Error(err)))
  }
  await removeFila(sala_id)
  return total
}

const contagem = (sala_id, partida_id, segundos) => {

    segundos = !segundos ? config.tempoDeInicio / 1000  : segundos
    setTimeout(()=>{
        
        if(segundos){
            segundos = segundos - 1
            if(!segundos) {
                sockets.io.in(sala_id).emit('contagem', segundos)
                comprarCartelasDaFila(sala_id, partida_id).then(console.log).catch(console.log)
                return
            }
            sockets.io.in(sala_id).emit('contagem', segundos)
            return contagem(sala_id, partida_id, segundos)
        }
    }, 1000)
}

const list = async (req, res) => {
  try {
    const {sala_id} = req.params
    const partida = await getPartidaIniciadaBySalaId(sala_id)
    if(partida){
      return res.status(400).json({status: false, message: 'partida já iniciada'})
    }
    const date = new Date()
    const dia = date.getDate()
    const mes = date.getMonth()

    const insertPartida = await criarPartida(sala_id, dia, mes)
    await insertBolasSorteadas(sala_id, insertPartida.id)
    sockets.io.in(sala_id).emit('iniciar partida')
    contagem(sala_id, insertPartida.id)
    res.json({status: true, ...insertPartida})
  } catch (error) {
    res.status(500).json({err: error.stack})
  }
}

module.exports = list