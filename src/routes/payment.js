const express = require('express')
const router = express.Router()
const mercadopago = require("mercadopago");

mercadopago.configure({
    sandbox: true,
    access_token: '',
    
});

const getFullUrl = (req) =>{
    const url = req.protocol + '://' + req.get('host');
    return url;
}

router.post('/',async(req,res)=>{

    const purchaseOrder = {
        items: [
          item = {
            id: '1',
            title: "Prestação De Serviço solutionstech",
            description : "Pagamento Prestação De Serviço solutionstech",
            quantity: 1,
            currency_id: 'BRL',
            unit_price: parseFloat('98.30')
          }
        ],
        auto_return : "all",
        payment_methods: {
            excluded_payment_types: [
                {
                    "id": "ticket"
                }
            ],
            installments: 3
        },
        binary_mode: true,

        back_urls : {
          success : getFullUrl(req) + "/pay/success",
          pending : getFullUrl(req) +  "/pay/pending",
          failure : getFullUrl(req) +"/pay/failure",
        },

        statement_descriptor: "solutionstech"

      }
      try {
        const preference = await mercadopago.preferences.create(purchaseOrder);
        return res.redirect(`${preference.body.init_point}`);
      }catch(err){
        return res.send(err.message);
      }
   
})

router.get('/success',(req,res)=>{
    res.send('sucesso')
})


module.exports = router