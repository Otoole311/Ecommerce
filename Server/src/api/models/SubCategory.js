let mongoose = require('mongoose');
const Product = require('../models/Product').default;

const SubCategory = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category',
        required: true,
        
    },
},{
    timestamps: true,
    strict: true
});

require('./model-methods/SubCategoryMethods')(SubCategory,Product);
module.exports = mongoose.model('SubCategory',SubCategory);