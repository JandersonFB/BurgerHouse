const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'bootwhatsapp.cwdkivtj8ka1.sa-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'dev',
    password: 'secret(!#)123TECH',
    database: 'BurgerHouse'
})

exports.connection = connection