const knex = require("../../../db/knex")
const sockets = require('../../../io/sockets')
const saldo = async (req, res) => {
  const telefone = req.params.telefone
  const socket = sockets[telefone]
  if(!telefone){
    return res.status(400).json({err: 'telefone não informado!'})
  }
  if(socket){
    setTimeout(async ()=>{
      const membroSaldo = await knex('membro').select('saldo').where({telefone}).first()
      socket.emit('saldo', membroSaldo.saldo)
    },6000)
  }
  const membro = await knex('membro').select('*').where({telefone}).first()

  res.json({saldo: membro.saldo, nome: membro.first_name})
}

module.exports = saldo