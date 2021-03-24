let mongoose = require('mongoose');

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
        type: String,
        required: true        
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Product',Product);