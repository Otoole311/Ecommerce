const debug = require('debug')('app:ClientController');
const Shop = require('../../models/Shop');
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

    //list shop by id
    list_shop: function(req,res){
        const shopID = req.params.id;
        Shop.findById(shopID)
        .populate({path: 'Categories'})
        .then(data =>{
            res.status(200).json(data);
            return;
        })
        .catch(FindErr =>{
            debug(FindErr.message);
            res.status(404).send({FindError: FindErr.message});
        })
    },

    //list category by id
    list_category: function(req,res){
        const categoryID = req.params.id;
        Category.findById(categoryID)
        .populate({path: 'SubCategories'})
        .then(data =>{
            res.status(200).json(data);
            return;
        })
        .catch(FindErr =>{
            debug(FinrErr);
            res.status(404).send({FindError: FindErr.message})     
        });
    },

    //list selected subcategory by id
    list_subcategory: function(req,res){
        const subCategoryID = req.params.id;
        SubCategory.findById(subCategoryID)
        .populate({path: 'Products'})
        .then(data =>{
            res.status(200).json(data);
            return;
        })
        .catch(FindErr =>{
            debug(FindErr.message);
            res.status(404).send({"Find Error": FindErr.message});
        });
    },

    list_product: function(req,res){
        const productID = req.params.id;
        Product.findById(productID)
        .then(data =>{
            res.status(200).json(data);
            return;
        })
        .catch(FindErr =>{
            debug(FindErr.message);
            res.status(404).send({"Find Error": FindErr.message});
        });
    },
}

