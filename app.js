const express = require('express');
const app = express();
const Inventory = require('./models/schema.js');




app.get('/api/customer/items', function(req, res) {
  // res.render('login');
});

app.post('/api/customer/items/:itemId/purchases', function(req, res) {
  // res.render('login');
});

app.get('/api/vender/purchases', function(req, res) {
  // res.render('login');
});

app.get('/api/vender/money', function(req, res) {
  // res.render('login');
});

app.post('/api/vender/items', function(req, res) {
  // res.render('login');
});

app.put('/api/vender/items/:itemId', function(req, res) {
  // res.render('login');
  // s
});


var newInventory = new Inventory({
  product: "Coke",
  price: "1.00",
  quantity:"20"
});

newInventory.save().then(function() {
  console.log("inventory added");
}).catch(function(err){
  console.log('error');
  console.log(err);
});
