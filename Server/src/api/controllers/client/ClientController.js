const debug = require('debug')('app:ClientController');
const Category = require('../../models/Category');
const SubCategory = require('../../models/SubCategory');
const Product = require('../../models/Product');
/**
 * Functions to implement
 * 
 * View all categories
 * View all subcategories.
 * View all products.
 * 
 * Select a category
 * Select a subcategroy
 * select a product
 * 
 * Add product to cart
 * 
 * Check out item
 * Check out all items
 * 
 * payment
 * 
 */



module.exports = {
    list_categories: function(req,res){
        Category.find({},function(err, docs){
            if(err){
                debug(err)
                res.status(404).send({Message: "Unable to Fetch categories."})
            }
            res.status(200).json(docs)
        })
    }
}

