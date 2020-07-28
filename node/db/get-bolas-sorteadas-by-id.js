const knex = require("./knex");

const getBolasSorteadas = partida_id => knex('bolas_sorteadas').select('*').where({partida_id}).first()

module.exports = getBolasSorteadas