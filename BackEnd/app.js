const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors');


const app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
// app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let products = [];

app.post('/product', (req, res) => {
 let product = {
    id: products.length + 1,
    pname: req.body.pname,
    price: req.body.price,
    expiryDate: req.body.expiryDate
 };
 products.push(product);
 res.status(201).send(product);
});

app.get('/product', (req, res) => {
    console.log("received a get request")
 res.status(200).send(products);
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));



/*
[
    {
        "id": 1,
        "pname": "Flag Hoisting",
        "price": "1",
        "expiryDate": "15-08-1947"
    },
   
]
*/ 