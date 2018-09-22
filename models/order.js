const mongoose = require('mongoose');

// Order Schema
const orderSchema = mongoose.Schema({
    customerName:{
        type: String,
        required: true
    },
    orderNumber:{
        type: String,
        required: true
    },
    dueDate:{
      type: Date,
      required: true
    },
    notes:{
        type: String,
        required: true
    },
    items:{
        type: Array,
        required: true
    }
});

const Order = module.exports = mongoose.model('Order', orderSchema);