const mongoose = require('mongoose');

//Supplier Schema
const supplierSchema = mongoose.Schema({
    supplierName:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    address:{
      type: String,
      required: true
    },
    items:{
        type: Array,
        required: true
    },
    notes:{
      type: String,
      required: true
  }
});

const Supplier = module.exports = mongoose.model('Supplier', supplierSchema);