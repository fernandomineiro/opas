const knex = require("./knex");
const getMembroByTelefone = telefone => knex('membro').select('*').where({telefone}).first()
module.exports = getMembroByTelefone