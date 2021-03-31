let mongoose = require('mongoose');

const Customer = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        //required: true
    },
    address: {
        type: String,
        required: true
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'User',
    }
},{
    timestamps: true,
    strict: true
});

module.exports = mongoose.model('Customer',Customer);