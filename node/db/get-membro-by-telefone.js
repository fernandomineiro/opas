const knex = require("./knex");

module.exports = telefone => knex('membro').select('*').where({telefone}).first()