const knex = require("./knex")

const entrarNaSala = params => knex('membro')
        .update({sala_id: params.sala_id || 0})
        .where({telefone: params.telefone})
        .catch(err=>({err}))

module.exports = entrarNaSala