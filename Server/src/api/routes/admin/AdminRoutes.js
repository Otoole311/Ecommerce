const express = require('express');
const adminRouter = express.Router();
const adminController = require('../../controllers/admin/AdminController');

/**
 * Create Routes
 */
adminRouter.post('/create/category',adminController.create_category);

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