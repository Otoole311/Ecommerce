"use strict"
let mongoose = require('mongoose');

const User = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required']
    },
    type:{
        type: String,
        enum: ['customer','merchant'],
        default: 'merchant'
    },
    password:{
        type: String,
        //unique: true,
        required: [true,'Password is required']
    },
});

require('./model-methods/UserMethods')(User);
module.exports = mongoose.model('User',User); 