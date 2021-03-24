const express = require('express');
const adminRouter = express.Router();
const adminController = require('../../controllers/admin/AdminController');

/**
 * Create Routes
 */
//create category
adminRouter.post('/create/category',adminController.create_category);
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

/**
 * Delete Routes
 */

module.exports = adminRouter;