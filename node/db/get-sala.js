const knex = require("./knex");

const getSala = sala_id => knex('lots').select('*').first().where({id: sala_id})

module.exports = getSala