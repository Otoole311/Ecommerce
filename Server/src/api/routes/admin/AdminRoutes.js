const express = require('express');
const adminRouter = express.Router();
const adminController = require('../../controllers/admin/AdminController');
const {authenticate} = require('../../middlewares/authenticate');
const {isMerchant} = require('../../middlewares/IsMerchant');
/**
 * configures adminRouter to group routes for middleware use.
 */
express.application.group = express.Router.group = function(path, middleware, configure){
    configure(adminRouter);
    this.use(path,middleware,adminRouter);
    return adminRouter;
}

//middleware for routes
const middlewares = [authenticate,isMerchant];

/**
 * Create Routes
 */
adminRouter.group('/create',middlewares, function(){
    adminRouter.post('/shop',adminController.create_shop); //create shop
    adminRouter.post('/category',adminController.create_category); //create shop category
    adminRouter.post('/subcategory',adminController.create_sub_category); //create subcategory under category
    adminRouter.post('/product',adminController.create_product); //create product under subcategory.
});

/**
 * Read Routes
 */
//adminRouter.route('/category/:id').get(authenticate,isMerchant,adminController.find_category)
adminRouter.get('/category/:id',middlewares, adminController.find_category);//find category data
adminRouter.get('/subcategory/:id',middlewares,adminController.find_sub_category);//find sub-category data
adminRouter.get('/product/:id',middlewares,adminController.find_product);//find product data

/**
 * Update Routes
 */
adminRouter.group('/update',middlewares,function(){
    adminRouter.put('/category/:id',adminController.update_category);// update shop category details.
    adminRouter.put('/subcategory/:id',adminController.update_SubCategory);//update subcategory details
    adminRouter.put('/product/:id',adminController.update_products);//update product details.
})

/**
 * Delete Routes
 */
adminRouter.group('/delete', middlewares, function(){
    adminRouter.delete('/product/:id',adminController.delete_product); //delete product
    adminRouter.delete('/subcategory/:id',adminController.delete_sub_category); //delete subcategory and all products under subcategory
    adminRouter.delete('/category/:id',adminController.delete_category);//delete category and subcategories and products under the parent.
})

module.exports = adminRouter;