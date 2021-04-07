/**
 * This module contains methods for the Subcategory model.
 * @param {SubCategory} SubCategory 
 */
module.exports = function(SubCategory){
    SubCategory.virtual('Products',{
        ref: 'Product',
        localField: '_id',
        foreignField: 'subcategory_id'
    });
    
    SubCategory.set('toObject',{virtuals: true});
    SubCategory.set('toJSON',{virtuals: true});
    
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
}