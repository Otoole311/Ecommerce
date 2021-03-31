let mongoose = require('mongoose');
const SubCategory = require('../models/SubCategory');

/**
 * Product model structure.
 */
const Product = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    subcategory_id:{
        type: mongoose.Schema.Types.ObjectId, ref:'SubCategory',
        required: true        
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        //required: true
    } 
},{
    timestamps: true,
    strict: true
});





module.exports = mongoose.model('Product',Product);