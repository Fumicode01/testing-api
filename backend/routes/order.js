const router = require("express").Router();
const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();


router.post("/order",  async (req, res) => {
    console.log(JSON.stringify(req.body))
    const config = {
        method: 'post',
        url: 'https://staging.api.scalapay.com/v2/orders',
        headers: { 
          'Accept': 'application/json', 
          'Authorization': 'Bearer qhtfs87hjnc12kkos', 
          'Content-Type': 'application/json'
        },
        data : req.body
      };
      axios(config)
        .then(snapshot => {
            console.log(snapshot.data)
            res.status(200).json(snapshot.data);
        })
        .catch(err => {
            console.log(err)
        });
  });

module.exports = router ;