let mongoose = require('mongoose');

const Order = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Customer',
        requred: true
    },
    product_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required: true
    }
},{
    timestamps: true,
    strict: true
});

module.exports = mongoose.model('Order',Order);