const mysql = require('mysql2')

const dbConnect = mysql.createConnection(
    {
      host: '127.0.0.1',
      user: 'root',
      password: 'password',
      database: 'movies_db'
    },
    console.log(`Connected to the courses_db database.`)
  );

module.exports = dbConnect