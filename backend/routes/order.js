const router = require("express").Router();
const sdk = require('api')('@scalapaydocs/v1.0#1mld74kq6wjpia');
const dotenv = require("dotenv");
dotenv.config();


router.get("/order",  async (req, res) => {

    sdk.post('/v2/orders', {discounts: [{amount: {}}]}, {
        Authorization: `Bearer ${process.env.SCALAPAY_API_KEY}`,
      })
        .then(snapshot => res.status(200).json(snapshot))
        .catch(err => res.status(500).json(err));
  });


module.exports = router ;