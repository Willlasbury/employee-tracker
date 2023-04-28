const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'company'
    }
)

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const allRoutes = require('./controllers');
app.use(allRoutes)

app.listen(PORT,()=>{
console.log('listening on port http://localhost:' + PORT)})
