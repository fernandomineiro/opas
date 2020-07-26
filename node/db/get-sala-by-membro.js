const knex = require("./knex");

module.exports = telefone => knex('membro').select('sala_id').where({telefone}).first()