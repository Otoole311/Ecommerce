let mongoose = require('mongoose');

const OrderItem = new mongoose.Schema({
    order_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    product_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity:{
        type: Number,
        default: 1
    }
},{
    timestamps: true,
    strict: true
});

module.exports = mongoose.model('OrderItem',OrderItem);