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
    owner:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Owner',
        required: true
    }
})