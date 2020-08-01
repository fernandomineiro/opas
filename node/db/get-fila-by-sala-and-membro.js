const knex = require("./knex");

const getFilaBySalaAndMembro = (sala_id, membro_id, partida_id) => knex('fila_compra_series')
    .select('*')
    .where({sala_id, membro_id, partida_id})
    .first()

module.exports = getFilaBySalaAndMembro