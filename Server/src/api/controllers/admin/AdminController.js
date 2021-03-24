const Category = require('../../models/Category');
const SubCategory = require('../../models/SubCategory');
const Product = require('../../models/Product');
const debug = require('debug')('app:AdminController');
//const config = require('../../../../config.json');
//using the config example: config.get('name:attribute')
module.exports = {

    /**
     * Create functions
     */
    //create category
    create_category: function(req,res){
        const newCategory = new Category({
            name: req.body.name
        });
        newCategory.save()
        .then(data =>{
            res.status(201).json(data);
            return;
        })
        .catch(CreateError =>{
            debug(CreateError);
            res.status(400).send({"Failed to Create Category": CreateError.message});
        })
    },

    //create sub category
    create_sub_category: function(req,res){
        const category_id = req.body.category_id;

        const newSubCategory = new SubCategory({
            name: req.body.name,
            category_id: req.body.category_id
        });
        
        newSubCategory.save()
        .then(data =>{
                //save subcategory id to category
                Category.findOneAndUpdate(category_id,{
                    $push: {SubCategories: data._id}
                },{
                    new: true
                }).then(updateData => {
                    return;
                })
                .catch(UpdateErr =>{
                    debug(UpdateErr);
                    res.status(404).send({"Unable to update Category list": UpdateErr.message})
                });
            res.status(201).json(data);
            return;
        })
        .catch(CreateError =>{
            debug(CreateError);
            res.status(400).send({"Failed to Create Sub-Category": CreateError.message});
        })
    },

    //create a product
    create_product: function(req,res){
        const subCategoryID = req.body.subcategory_id; 

        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            subcategory_id: subCategoryID
        });

        newProduct.save()
        .then(data =>{
                //save product to subcategory
                SubCategory.findOneAndUpdate(subCategoryID,{
                    $push: {products: data._id}
                },{
                    new: true
                }).then(updateData => {
                    return;
                })
                .catch(UpdateErr =>{
                    debug(UpdateErr.message);
                    res.status(400).send({"Unable to update SubCategory list": UpdateErr.message})
                });
            res.status(201).json(data);
            return;
        })
        .catch(CreateError =>{
            debug(CreateError.message);
            res.status(400).send({"Failed to Create Product": CreateError.message});
        });
    },

    /**
     * Read functions
     */
    //find specific product
    find_product: function(req,res){
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
    //find specific Sub category
    find_sub_category: function(req,res){
        const subCategoryID = req.params.id;
        SubCategory.findById(subCategoryID)
        .then(data =>{
            res.status(200).json(data);
            return;
        })
        .catch(FindErr =>{
            debug(FindErr.message);
            res.status(404).send({"Find Error": FindErr.message});
        });
    },

    //find specific category
    find_category: function(req,res){
        const categoryID = req.params.id;
        Category.findById(categoryID)
        .then(data =>{
            res.status(200).json(data);
            return;
        })
        .catch(FindErr =>{
            debug(FindErr.message);
            res.status(404).send({"Find Error": FindErr.message});
        });
    },

    /**
     * Update Functions
     */

    /**
     * Delete functions
     */


    /**
     * functions to List all data
     */
}