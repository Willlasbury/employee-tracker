const mysql = require('mysql2')

const database = 'company_db'

const dbConnect = mysql.createConnection(
    {
      host: '127.0.0.1',
      user: 'root',
      password: 'password',
      database: database
    },
    console.log(`Connected to the ${database} database.`)
  );

module.exports = dbConnect
