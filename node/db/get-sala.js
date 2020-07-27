const knex = require("./knex");

const getSala = sala_id => knex('lots').select('*').where({id: sala_id})

module.exports = getSala