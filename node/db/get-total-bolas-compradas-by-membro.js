const knex = require("./knex");

const getTotalBolasCompradasByMembro = telefone => knex('membro_cartelas')
    .count('* as total')
    .innerJoin('membro', 'membro.id', 'membro_cartelas.membro_id')
    .first()
    .where({'membro.telefone': telefone})

module.exports = getTotalBolasCompradasByMembro