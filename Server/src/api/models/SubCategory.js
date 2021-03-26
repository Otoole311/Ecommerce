let mongoose = require('mongoose');
const Product = require('../models/Product');

const SubCategory = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category',
        required: true,
        
    },
},{
    timestamps: true
});

/**
 * Delete all products under subcategory when subcategory is deleted.
 */
SubCategory.pre('deleteOne',{document: true}, async function(next){
    await Product.deleteMany({subcategory_id: this._id}).exec();
    next();
});

SubCategory.pre('deleteMany',{document: true}, async function(next){
    console.log(this)
    await Product.deleteMany({subcategory_id: this._id}).exec();
    next();
});

module.exports = mongoose.model('SubCategory',SubCategory);