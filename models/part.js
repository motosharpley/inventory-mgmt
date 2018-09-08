const mongoose = require('mongoose');

// Part Schema
const partSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    partNumber:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    quantity:{
      type: Number,
      required: true
    }
});

const Part = module.exports = mongoose.model('Part', partSchema);