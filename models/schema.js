const mongoose = require('mongoose');


const inventorySchema = new mongoose.Schema({
      product: {type: String, required: true},
      price: {type: Number, required: true},
      quantity: {type: Number, required: true}
      })

// const transactionSchema = new mongoose.Schema({
//
//       });

const Inventory = mongoose.model('Inventory', inventorySchema, 'Inventory');
// const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Inventory
