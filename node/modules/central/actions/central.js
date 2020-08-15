const knex = require("../../../db/knex")
const sockets = require('../../../io/sockets')

const setTotalSocketsInRoom = (salaId) => Object.keys(sockets).filter(key=>sockets[key].salaId == salaId).length

//{telefone, qtd}
const central = async (req, res) => {
    try {
        const telefone = req.params.telefone
        const membro = await knex('membro').select('saldo', 'first_name as nome').where({telefone}).first()
        let salas = await knex('lots').select('*')
        salas = salas.map(sala => {
            sala.online = setTotalSocketsInRoom(sala.id)
            return sala
        })    
        res.json({salas, membro})
    } catch (error) {
        res.status(500).json({err: error.stack})
    }
    
}

module.exports = central