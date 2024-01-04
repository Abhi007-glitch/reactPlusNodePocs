const express = require("express");
const bodyParser = require("body-parser");
const ProductRouter = require("../BackEnd/router/ProductRouter");
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cors());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});



app.use("/app/v1/product",ProductRouter);

app.listen(8282, ()=>{
  console.log("Node server start running at port 8282");
});