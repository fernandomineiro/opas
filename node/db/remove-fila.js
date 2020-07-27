const knex = require("./knex");

const removeFila = sala_id => knex('fila_compra_series').delete().where({sala_id})

module.exports = removeFila