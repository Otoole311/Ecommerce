/**
 * This module contains methods for the Shop model.
 * @param {Shop} Shop 
 */
"use strict"
module.exports = function(Shop){
    /**
     * Defining foreign key references
     */
    Shop.virtual('Categories',{
        ref: 'Category',
        localField: '_id',
        foreignField: 'shop_id'
    });

    //set Object and json property to true. default is set to false
    Shop.set('toObject',{virtuals: true});
    Shop.set('toJSON',{virtuals: true});

}