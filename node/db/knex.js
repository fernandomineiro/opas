// const knex = require('knex')({
//     client: 'mysql',
//     connection: {
//       host : '127.0.0.1',
//       user : 'bingo',
//       password : 'Busnello@123',
//       database : 'bingo'
//     }
//   });

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
