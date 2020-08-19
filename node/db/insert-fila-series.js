const knex = require("./knex");

const insertFilaSerie = params => knex('fila_compra_series').insert({
        qtd: params.qtd,
        membro_id: params.membro_id,
        partida_id: params.partida_id,
        sala_id: params.sala_id,
        value: params.value
    })
    .catch(err => ({err}))
    module.exports = insertFilaSerie