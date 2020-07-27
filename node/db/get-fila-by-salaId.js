const knex = require("./knex");

const getFilaBySalaId = sala_id => knex('fila_compra_series').select('*').where({sala_id})
module.exports = getFilaBySalaId