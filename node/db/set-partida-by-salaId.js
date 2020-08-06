const knex = require("./knex");
const insertBolasSorteadas = require("./insert-bolas-sorteadas");
const getBolasSorteadas = require("./get-bolas-sorteadas-by-id");

const setPartidaBySalaId = async (sala_id, partida_id) => {
    knex('membro').update({partida_id}).where({sala_id})
    await insertBolasSorteadas(sala_id, partida_id)
    return getBolasSorteadas(partida_id)
}

module.exports = setPartidaBySalaId