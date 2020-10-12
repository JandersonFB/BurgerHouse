const mysql = require('mysql')
require('dotenv').config()

const connection = mysql.createConnection({
    host: 'bootwhatsapp.cwdkivtj8ka1.sa-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'dev',
    password: 'secret(!#)123TECH',
    database: process.env.DATABASE_NAME
})

exports.connection = connection