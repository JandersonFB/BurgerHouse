require('module-alias/register')
const express = require('express')
const router = express.Router()
const paypal = require('paypal-rest-sdk')

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AUeEAIhbz0YfbzTThFEUHQYsrOpHCDJzb3f_xsK4RvGiFMKTqO8Lolarn4e29KJZ0J-9caVz4iZmvxOm',
    'client_secret': 'EItV6MAnHMWOdva9gdfytTHig5BeaznBzm8eJY4eZHMpxhqgloQrWyWpU3T9sQKRWDuau5QcE56YyxSi'
  });


router.post('/',(req,res)=>{

    let create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "/success",
            "cancel_url": "/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Prestação De Serviço solutionstech",
                    "sku": "001",
                    "price": "98.30",
                    "currency": "BRL",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "BRL",
                "total": "98.30"
            },
            "description": "Pagamento Prestação De Serviço solutionstech"
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            payment.links.forEach(e=>{
                if(e.rel==='approval_url')
                res.redirect(e.href)

            })
        }
    });
   
})


module.exports = router