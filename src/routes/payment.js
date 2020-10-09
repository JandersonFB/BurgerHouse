require('module-alias/register')
const express = require('express')
const router = express.Router()
const paypal = require('paypal-rest-sdk')



router.get('/',(req,res)=>{
    console.log(paypal)
    res.send('ok')
})


module.exports = router