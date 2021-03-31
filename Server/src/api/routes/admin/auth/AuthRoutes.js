const express = require('express');
const adminAuthRouter = express.Router();
const authController = require('../../../controllers/admin/auth/AuthController');

/**
 * Register user
 */
adminAuthRouter.post('/register', authController.register);

/**
 * login user
 */
adminAuthRouter.post('/login',authController.login);

module.exports = adminAuthRouter;