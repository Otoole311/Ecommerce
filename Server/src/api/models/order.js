let mongoose = require('mongoose');

const Order = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Customer',
        requred: true
    },
    status:{
        type: String,
    },
    amount:{
        type: Number
    }
},{
    timestamps: true,
    strict: true
});

module.exports = mongoose.model('Order',Order);