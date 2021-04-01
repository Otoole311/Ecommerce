let mongoose = require('mongoose');

const User = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        unique: true,
        required: true
    },
});

require('./model-methods/UserMethods')(User);
module.exports = mongoose.model('User',User); 