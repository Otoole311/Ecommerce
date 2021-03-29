let mongoose = require('mongoose');

const Customer = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        //required: true
    },
    email: {
        type: String,
        //unique: true
        required: true
    },
    address: {
        type: String,
        required: true
    }
},{
    timestamps: true,
    strict: true
});

module.exports = mongoose.model('Customer',Customer);