const knex = require("../../../db/knex")
//{membro_id,qtd, sala_id, partida_id}
const partida = async (req, res) => {
    const {body} = req
    knex('fila_compra_series').insert(body)
    .then(()=>res.json({status: 'ok'}))
    .catch(err => res.status(400).json({err: err.stack}))
}

module.exports = partida