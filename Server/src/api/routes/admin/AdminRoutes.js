const express = require('express');
const adminRouter = express.Router();
const adminController = require('../../controllers/admin/AdminController');
const {authenticate} = require('../../middlewares/authenticate');

/**
 * Create Routes
 */
//create category
adminRouter.post('/create/category',authenticate,adminController.create_category);
//create subcategory
adminRouter.post('/create/subcategory',adminController.create_sub_category);
//create product
adminRouter.post('/create/product',adminController.create_product);

/**
 * Read Routes
 */
//find category data
adminRouter.get('/category/:id',adminController.find_category);
//find sub-category data
adminRouter.get('/subcategory/:id',adminController.find_sub_category);
//find product data
adminRouter.get('/product/:id',adminController.find_product);

/**
 * Update Routes
 */
//update Category data
adminRouter.put('/update/category/:id',adminController.update_category);
//update Sub category
adminRouter.put('/update/subcategory/:id',adminController.update_SubCategory);
//update Products
adminRouter.put('/update/product/:id',adminController.update_products);

/**
 * Delete Routes
 */
//delete products
adminRouter.delete('/delete/product/:id',adminController.delete_product);
//delete sub category
adminRouter.delete('/delete/subcategory/:id',adminController.delete_sub_category);
//delte category
adminRouter.delete('/delete/category/:id',adminController.delete_category);

module.exports = adminRouter;