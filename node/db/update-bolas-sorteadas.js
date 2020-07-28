const knex = require("./knex");

const updateBolasSorteadas = (id, bolas) => knex('bolas_sorteadas').update({bolas}).where({id})

module.exports = updateBolasSorteadas