const knex = require('./knex')
const totalCartelasVendidasBySala = sala_id => knex('membro_cartelas')
    .count('cartela_id as total')
    .first()
    .where({sala_id})
    
module.exports = totalCartelasVendidasBySala
