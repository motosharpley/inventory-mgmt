const mongoose = require('mongoose');

// Order Schema
const categorySchema = mongoose.Schema({
    categoryName:{
        type: String,
        required: true
    },
    categoryId:{
        type: String,
        required: true
    }
});

const Category = module.exports = mongoose.model('Category', categorySchema);