const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '64.227.105.89',
      user : 'bingo',
      password : 'Busnello@123',
      database : 'bingo'
    }
  });

module.exports = knex
