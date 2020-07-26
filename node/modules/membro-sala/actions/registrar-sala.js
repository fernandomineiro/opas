const membroSala = require("../../../db/membro-sala")
const _ = require('lodash')

const partida = async (req, res) => {
    const entrou = await membroSala({sala_id: req.body.sala_id || 0, telefone: req.body.telefone})
    const response = entrou.err || !entrou
        ? res.status(400).json({err: _.get(response, 'err.stack') || entrou})
        : res.json({status: 'ok'})
}

module.exports = partida