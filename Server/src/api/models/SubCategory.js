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
 * Cascade delete for a sub-category
 */
SubCategory.pre('deleteOne',{document: true}, async function(next){
    //console.log("Deleting Products")
    await Product.deleteMany({subcategory_id: this._id}).exec();
    next();
});

/**
 * Cascade delete for all categories
 */


module.exports = mongoose.model('SubCategory',SubCategory);