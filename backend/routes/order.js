const router = require("express").Router();
const sdk = require('api')('@scalapaydocs/v1.0#1mld74kq6wjpia');
const dotenv = require("dotenv");
dotenv.config();

// const config = {
//     Headers:{
//         'Authorization': `Bearer qhtfs87hjnc12kkos`
//     }
// }

router.post("/order",  async (req, res) => {
    sdk.post('/v2/orders', req.body, {Authorization: "Bearer qhtfs87hjnc12kkos"})
    // sdk.post('/v2/orders', req.body, config)
        .then(snapshot => res.status(200).json(snapshot))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        });
  });

module.exports = router ;