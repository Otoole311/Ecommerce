const Category = require('../../models/Category');
const SubCategory = require('../../models/SubCategory');
const Product = require('../../models/Product');
const Shop = require('../../models/Shop');
const debug = require('debug')('app:AdminController');
//const config = require('../../../../config.json');
//using the config example: config.get('name:attribute')
module.exports = {

    /**
     * Create functions
     */
    //create a shop
    create_shop: function(req,res){
        const newShop = new Shop({
            name: req.body.name,
        });

        newShop.save()
        .then(data =>{
            res.status(201).json(data);
        })
        .catch(CreateError =>{
            debug(CreateError);
            res.status(400).send({
                "Failed to create Shop": CreateError.message
            });
        })
    },

    //create category
    create_category: function(req,res){
        const newCategory = new Category({
            name: req.body.name,
            shop_id: req.body.shop_id
        });
        newCategory.save()
        .then(data =>{
            res.status(201).json(data);
            return;
        })
        .catch(CreateError =>{
            debug(CreateError);
            res.status(400).send({
                "Failed to Create Category": CreateError.message
            });
        })
    },

    //create sub category
    create_sub_category: function(req,res){
        const newSubCategory = new SubCategory({
            name: req.body.name,
            category_id: req.body.category_id
        });
        
        newSubCategory.save()
        .then(data =>{
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
        const newProduct = new Product({
            name: req.body.name,
            price: req.body.price,
            subcategory_id: req.body.subcategory_id,
        });
        newProduct.save()
        .then(data =>{
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
    //find shop
    find_shop: function(req,res){
        const shopID = req.params.id;
        Shop.findById(shopID)
        .then(data =>{
            res.status(200).json(data);
            return;
        })
        .catch(FindErr =>{
            debug(FindErr.message);
            res.status(404).send({"Find Error": FindErr.message});
        })
    },

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
        .populate({path: 'Products', select: 'name price'})
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
        .populate({path: 'SubCategories', select: 'name'})
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
    //update shop
    update_shop: function(req,res){
        const shopID = req.params.id;
        const name = req.body.name;
        const updates = {name};

        Shop.findOneAndUpdate(shopID,{
            $set: updates
        },{
            new:true
        }).then(data =>{
            res.status(200).json(data);
            return;
        })
        .catch(UpdateErr =>{
            debug(UpdateErr)
            res.status(400).send({"Error Updating Shop": UpdateErr.message});
        })
    },

    //update category
    update_category: function(req,res){
        const categoryID = req.params.id;
        const name = req.body.name;
        const updates = {name};

        Category.findOneAndUpdate(categoryID,{
            $set: updates
        },{
            new:true
        }).then(data =>{
            res.status(200).json(data);
            return;
        })
        .catch(UpdateErr =>{
            debug(UpdateErr)
            res.status(400).send({"Error Updating Category": UpdateErr.message});
        })
    },
    //update Subcategory
    update_SubCategory: function(req,res){
        const subcategoryID = req.params.id;
        const name = req.body.name;
        const category_id = req.body.category_id;
        const updates = {name, category_id};

        SubCategory.findOneAndUpdate(subcategoryID,{
            $set: updates
        },{
            new:true
        }).then(data =>{
            res.status(200).json(data);
            return;
        })
        .catch(UpdateErr =>{
            debug(UpdateErr)
            res.status(400).send({"Error Updating Sub-Category": UpdateErr.message});
        })
    },
    //update products
    update_products: function(req,res){
        const productID = req.params.id;
        const name = req.body.name;
        const price = req.body.price;
        const subcategory_id = req.body.subcategory_id;
        const updates = {name, price,subcategory_id};

        Product.findByIdAndUpdate(productID,{
            $set: updates
        },{
            new: true
        }).then(data =>{
            res.status(200).json(data);
            return;
        })
        .catch(UpdateErr =>{
            debug(UpdateErr)
            res.status(400).send({"Error Updating Product": UpdateErr.message});
        })
    },

    /**
     * Delete functions
     */
    //delete category
    delete_category: async function(req,res){
        const categoryID = req.params.id;
        try{
            const CategoryDoc = await Category.findOne({_id: categoryID})
            await CategoryDoc.deleteOne();
            res.status(200).json({
                "message": "Successfully Deleted Sub Category"
            });
        }catch(error){
            debug(error)
            res.status(500).send({"Error": error.message})
        }
    },

    //delete subcategory
    delete_sub_category: async function(req,res){
        const subCategoryID = req.params.id;        
        try{
            const subCategoryDoc = await SubCategory.findOne({_id: subCategoryID})
            await subCategoryDoc.deleteOne()
            res.status(200).json({
                "message": "Successfully Deleted Sub Category"
            });
        }catch(error){
            debug(error)
            res.status(500).send({"Error": error.message})
        }
    },
    //delete product
    delete_product: async function(req, res){
        const productID = req.params.id;
        try{
            const productDoc = await Product.findOne({_id: productID});
            await productDoc.deleteOne()
            res.status(200).json({
                "message": "Successfully Deleted Product"
            });
        }catch(error){
            debug(error)
            res.status(500).send({"Error": error.message})
        }        
    },

    /**
     * functions to List all data
     */
}