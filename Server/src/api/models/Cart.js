const mongoose = require('mongoose');

/**
 * User shopping cart model
 */
const Cart = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cartContents:{
        type: [Object]
    }
},{
    timestamps:true,
    strict: true
});

module.exports = mongoose.model('Cart',Cart);