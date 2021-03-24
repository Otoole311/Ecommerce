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

/**
 * Update Routes
 */

/**
 * Delete Routes
 */

module.exports = adminRouter;