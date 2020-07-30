const knex = require("./knex");

const getTotalBolasCompradasByMembro = telefone => knex('membro_cartelas')
    .count('* as total')
    .innerJoin('membro')
    .first()
    .where({'membro.telefone': telefone})

module.exports = getTotalBolasCompradasByMembro