const membroSala = require("../../../db/membro-sala")
const getSalaByMembroTelefone = require('../../../db/get-sala-by-membro')
const _ = require('lodash')
const socket = require('../../../io/sockets')
const getSala = require("../../../db/get-sala")

const gegistraSala = async (req, res) => {
    const telefone = _.get(req.body, 'telefone')
    const sala_id = _.get(req.body, 'sala_id')
    
    const {sala_id: salaMembro} = await getSalaByMembroTelefone(telefone)
    const {partida_id} = await getSala(sala_id)
    const entrou = await membroSala({sala_id: sala_id, telefone, partida_id})
    
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
            }else{
                socket[telefone].leave(salaMembro)
            } 
            clearInterval(intervall)
        }
    }, 1000)
    res.json({status: 'ok'})
}

module.exports = gegistraSala