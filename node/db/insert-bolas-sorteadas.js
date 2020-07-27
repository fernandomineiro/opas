const knex = require("./knex");

const insertBolasSorteadas = (sala_id, partida_id) => knex('bolas_sorteadas').insert({partida_id, sala_id})

module.exports = insertBolasSorteadas