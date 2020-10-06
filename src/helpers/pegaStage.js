require('module-alias/register')
const db = require('@database/configSQL');

async function stage(user) {
    let sql = `SELECT stage FROM users where telephone = '${user}';`
    await db.connection.query(sql, (err, UserId) => {

        if (err) {
            throw err
        } else {
            //console.log(UserId)
            const UserId
        }
    })
}

stage('5524988180688@c.us').then(res => console.log(res))
    //stage('249881806886@c.us').then(res => console.log(res))
exports.stage = stage