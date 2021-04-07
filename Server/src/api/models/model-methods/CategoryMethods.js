
/**
 * This module contains methods for the category model.
 * @param {Category} Category 
 */
"use strict"
module.exports = function(Category){

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
     * Cascade delete for a category
     * This function deletes all subcategories under the selected parent category
     * before deleting the parent category.
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
}