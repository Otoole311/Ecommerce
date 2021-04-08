let mongoose = require('mongoose');
const Category = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },

    shop_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shop',
        //required: true
    }
},{
    timestamps: true,
    strict: true
});

require('./model-methods/CategoryMethods')(Category);
module.exports = mongoose.model('Category',Category);