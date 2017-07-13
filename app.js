const express = require('express'); //Load express server
const app = express();  // Initialize express server
const Inventory = require('./models/schema.js'); // Load schema
var bodyParser = require('body-parser');

app.use(bodyParser.json());
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/vend');

app.listen(3000, function(){
  console.log("App is live")
});

const inventory =  Inventory.find({}, function(err, items){
  if (items.length == 0) {
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
  }
});


app.get('/', function(req, res){
  Inventory.find().then(function(inventory){
    res.json(inventory)
  }).catch(function(err){
  return console.log(err);
  });
});

    // console.log('The author is %s', story.author.name);
    // prints "The author is Bob Smith"

  // const inventory =  Inventory.find().lean().exec(function(err, items){
  //   if (err){
  //     res.send("I couldn't fetch any items for you")
  //   } else {
  //     res.json((items));

//   });
// })

// Routes/Endpoints
// app.get('/api/customer/items', function(req, res) {
//
// });

app.post('/api/customer/items/purchases', function(req, res) {
  Inventory.find().then(function(inventory){
    res.json(inventory)
  }).catch(function(err){
  return console.log(err);
  });
});

app.get('/api/vender/purchases', function(req, res) {

});

app.get('/api/vender/money', function(req, res) {

});

app.post('/api/vender/items', function(req, res) {

});

app.put('/api/vender/items/:itemId', function(req, res) {

});

module.exports = app;
