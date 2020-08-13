const knex = require("./knex");

const getMembroById = id => knex('membro').select('*').where({id}).first()
module.exports = getMembroById