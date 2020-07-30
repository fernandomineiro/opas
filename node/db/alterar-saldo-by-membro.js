const knex = require("./knex");

const alterarSaldo = (id, saldo) => knex('membro').update({saldo}).where({id})

module.exports = alterarSaldo