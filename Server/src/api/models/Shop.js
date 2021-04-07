let mongoose = require('mongoose');

/**
 * Shop model schema
 */
const Shop = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
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

require('./model-methods/ShopMethods')(Shop);
module.exports = mongoose.model('Shop',Shop);