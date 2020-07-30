const knex = require("./knex");

const getBolasSorteadas = partida_id => knex('bolas_sorteadas')
    .select('*')
    .where({partida_id})
    .first()
    .then(data => {
        if(data){
            data.bolas = data.bolas ? JSON.parse(data.bolas) : null
        }
        return data
    })

module.exports = getBolasSorteadas