const knex = require("./knex");

const setPartidaBySalaId = (sala_id, partida_id) => knex('membro').update({partida_id}).where({sala_id})

module.exports = setPartidaBySalaId