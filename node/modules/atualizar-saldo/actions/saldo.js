const knex = require("../../../db/knex")

const list = async (req, res) => {
  const telefone = req.params.telefone
  if(!telefone){
    return res.status(400).json({err: 'telefone não informado!'})
  }
  const membro = await knex('membro').select('saldo').where({telefone}).first()
  console.log(membro)
  res.json({saldo: membro.saldo})
}

module.exports = list