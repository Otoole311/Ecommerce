let mongoose = require('mongoose');
const SubCategory = require('../models/SubCategory');
const Product = require('../models/Product');
const debug = require('debug')('app:model:Category');

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