const express = require("express");
const app = express();
const orderRoute = require("./routes/order");


    app.use(express.json());
    app.use("/api", orderRoute);
    


  app.listen(5000, (req, res) => {
    console.log("backend server is runnning")
})