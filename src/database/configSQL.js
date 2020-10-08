const mysql = require('mysql')
require('dotenv').config()
const connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORTA,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

exports.connection = connection