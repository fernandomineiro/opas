const getCartelasByMembros = require('../../../db/get-cartelas-by-membros')
const knex = require('../../../db/knex')
const updateBolasSorteadas = require('../../../db/update-bolas-sorteadas')
const getBolasSorteadas = require('../../../db/get-bolas-sorteadas-by-id')
const _ = require('lodash')
const sockets = require('../../../io/sockets')
const resetPartida = require('../../../db/reset-partida')
const melhoresCartelas = require('../../../helpers/melhores-cartelas')
const Globals = require('../../../globals')

const getSalaById = sala_id => knex('lots').select('*').where({id: sala_id}).first()

const setBolasSorteadas = (bolas, bola) => {
  if(bolas){
    bolas.push(bola)
    return bolas
  }
  return [bola]
}

const sendBola = (sala_id, bola, bolasSorteadas, totalCompradas) => {
  if(sockets.io){
      sockets.io.in(sala_id).emit('bola sorteada', {bola, sorteadas: bolasSorteadas, totalCompradas})
  }
}

const sortear = async (req, res) => {
  try {
    
    const bola = parseInt(req.body.bola)
    const sala_id = parseInt(req.body.sala_id)
    if(Globals[sala_id]){
      return res.status(400).json({err: 'Contagem ainda não terminou, favor aguardar '+Globals[sala_id]+' segundos'})
    }
    if(!bola || !sala_id ){
      return res.status(400).json({
        err: `campos obrigatórios não preenchidos bola:${bola} sala_id: ${sala_id}`,
      })
    }
    const sala = await getSalaById(sala_id)
    const partida_id = sala.partida_id
    const ganhadores = await knex('ganhadores').select('*').first().where({partida_id})
    let tipoDePremio = _.get(ganhadores, 'premio')
    tipoDePremio = !tipoDePremio ? 'linha' : 'bingo'
    const bolasSorteadas = await getBolasSorteadas(partida_id)
    
    if(!bolasSorteadas){
      return res.status(400).json({err: `Nenhuma partida foi iniciada para esta sala: ${sala_id} partida: ${partida_id}`})
    }
    const jaSorteada = (bolasSorteadas.bolas || []).includes(bola)
    if(jaSorteada){
      return res.status(400).json({err: 'Bola já sorteada para esta partida'})
    }

    bolasSorteadas.bolas = setBolasSorteadas(bolasSorteadas.bolas, bola)
    
    await updateBolasSorteadas(bolasSorteadas.id, JSON.stringify(bolasSorteadas.bolas))
    if(bolasSorteadas.bolas.length == 90){
      await resetPartida(partida_id)
      return res.status(400).json({err: 'todas as bolas sorteadas, nenhum jogador ganhou ou comprou cartelas'})
    }
    
    const bolasCompradas = await getCartelasByMembros(partida_id)

    sendBola(sala_id, bola, bolasSorteadas.bolas, bolasCompradas.length / 15)

    // const sorteio = {
    //   linha: () => sendMelhoresLinhas(gerarLinhas(bolasCompradas, bolasSorteadas.bolas), bolasCompradas),
    //   bingo: () => sendMelhoresCartelas(gerarCartelas(bolasCompradas, bolasSorteadas.bolas), bolasCompradas)
    // }
    const melhores = melhoresCartelas[tipoDePremio](bolasCompradas, bolasSorteadas.bolas)

    res.json({melhores})
  } catch (err) {
    res.status(500).json({err: err.stack})
  }

}

module.exports = sortear