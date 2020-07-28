const knex = require("./knex");

const getPartidaBySalaId = sala_id => knex('partida1').select('*').where({sala_id}).first()
module.exports = getPartidaBySalaId