const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    database: 'calculadora',
    password: 'password'
})

module.exports = connection