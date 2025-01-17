const knex = require("./knex");
const _ = require('lodash')

const getCartelasByMembros = (partida_id) => knex('membro_cartelas')
    .select(
        "membro_cartelas.cartela_id",
        "cartela_numero.numero",
        "membro_cartelas.sala_id",
        "membro.telefone",
        "membro_cartelas.partida_id"
        )
    .innerJoin('cartela_numero', 'cartela_numero.cartela_id', 'membro_cartelas.cartela_id')
    .innerJoin('membro', 'membro.id', 'membro_cartelas.membro_id')
    .where({"membro_cartelas.partida_id": partida_id})
    .catch(err => console.log(new Error(err)))

module.exports = getCartelasByMembros