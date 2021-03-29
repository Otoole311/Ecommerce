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
        required: true
    }
},{
    timestamps: true
});

/**
 * Defining foreign key references
 */
Category.virtual('SubCategories',{
    ref: 'SubCategory', //the model to use
    localField: '_id', // find in model, where localField
    foreignField: 'category_id', //is equal to foreignField
});

//set Object and json property to true. default is set to false
Category.set('toObject',{virtuals: true})
Category.set('toJSON',{virtuals: true});

/**
 * Cascade delete for  a category
 */
Category.pre('deleteOne', {document: true}, async function(next){
    await SubCategory.find({category_id: this._id}, function(err,docs){
        if(err){
            debug(err)
            throw (err);
        }
        docs.forEach( async function(subCategoryDoc){
            //console.log(subCategoryDoc);
            try{
                //console.log("Deleting Sub-Category")
                await subCategoryDoc.deleteOne();
            }catch(Error){
                debug(Error);
                throw(Error);
            }
        })
    });
    next();
});

/**
 * Casacade delete for all categories
 */


module.exports = mongoose.model('Category',Category);