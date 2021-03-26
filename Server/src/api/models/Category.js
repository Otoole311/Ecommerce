let mongoose = require('mongoose');
const SubCategory = require('../models/SubCategory');

const Category = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
},{
    timestamps: true
});

Category.pre('deleteOne', {document: true}, async function(next){
    await SubCategory.deleteMany({category_id: this._id}).exec();
    next();
});


module.exports = mongoose.model('Category',Category);