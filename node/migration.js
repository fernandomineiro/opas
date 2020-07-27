var mysql = require('mysql');
const fs = require('fs')
var con = mysql.createConnection({
    host : 'mysqlsrv',
    user : 'root',
    password : 'root'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    con.query('DROP SCHEMA IF EXISTS bingo', function (err, result) {
      if (err) throw err;
      con.query('CREATE SCHEMA IF NOT EXISTS bingo', (err, result)=>{
        if (err) throw err;
        const txt = fs.readFileSync('MYSQL.sql').toString();
        let sql = txt.split('\r\n').reduce((acc, line)=>{
            if(!line.includes('/*') && !line.includes('--') ){
                    acc = acc + line.replace(/;/g, '') + '\r\n'
                }
                return acc
        }, '')

        sql = `USE bingo;
        ${sql}
        `
    
        con.query(sql, (err, result)=>{
            if (err) throw err;
            console.log(result)
        })
      })
    });
  });