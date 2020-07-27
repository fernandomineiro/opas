const knex = require("./knex");
const comprarCartelas = async (params) => {
    const cartelas = await knex('cartela_numero')
        .select(knex.raw(`${params.sala_id} as sala_id, ${params.membro_id} as membro_id, ${params.partida_id} as partida_id`), 'cartela_id')
        .whereNotIn('cartela_id', knex.raw('SELECT cartela_id FROM membro_cartelas WHERE sala_id = ? ', params.sala_id))
        .groupBy('cartela_id')
        .limit(params.qtd * 6)
    return knex('membro_cartelas').insert(cartelas)
}
module.exports = comprarCartelas