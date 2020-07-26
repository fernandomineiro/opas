const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'mysqlsrv',
      user : 'root',
      password : 'root',
      database : 'bingo'
    }
  });

module.exports = knex
