const membroSala = require("../../../db/membro-sala")
const getSalaByMembroTelefone = require('../../../db/get-sala-by-membro')
const _ = require('lodash')
const socket = require('../../../io/sockets')
const getSala = require("../../../db/get-sala")
const getMembroByTelefone = require("../../../db/get-membro-by-telefone")
const getTotalBolasCompradasByMembro = require("../../../db/get-total-bolas-compradas-by-membro")
const totalCartelasVendidasBySala = require('../../../db/get-total-cartelas-vendidas-by-sala')
const knex = require("../../../db/knex")

const gegistraSala = async (req, res) => {
    try {
        const telefone = _.get(req.body, 'telefone')
        const sala_id = _.get(req.body, 'sala_id')
        const {sala_id: salaMembro} = await getSalaByMembroTelefone(telefone)
        const sala = await getSala(sala_id)
        const entrou = await membroSala({sala_id: sala_id, telefone, partida_id: sala ? sala.partida_id : 0})
        const membro = await getMembroByTelefone(telefone)
        delete membro.password
        let {total: totalBolasCompradasByMembro} = await getTotalBolasCompradasByMembro(telefone)
        const {total: totalBolasCompradas} = await totalCartelasVendidasBySala(sala_id)
        const filaCompradas = await knex('fila_compra_series').select('*').first().where({membro_id: membro.id})
  
        if(!totalBolasCompradasByMembro){
            totalBolasCompradasByMembro = (_.get(filaCompradas, 'qtd') || 0) * 6
        }
        if( entrou.err || !entrou){
            return res.status(400).json({err: _.get(response, 'err.stack') || entrou})
        }
        let tentativas = 0
        const intervall = setInterval(()=>{
            tentativas = tentativas + 1
            if(tentativas > 5) return clearInterval(intervall)
            if(socket[telefone]){
                if(sala_id){
                    socket[telefone].join(sala_id)
                    socket[telefone].sala_id = sala_id
                }else{
                    socket[telefone].leave(salaMembro)
                    socket[telefone].sala_id = 0
                } 
                clearInterval(intervall)
            }
        }, 1000)
        res.json({status: 'ok', ...sala, ...membro, totalBolasCompradas, totalBolasCompradasByMembro})   
    } catch (err) {
        res.status(500).json({err: err.stack})
    }
}

module.exports = gegistraSala