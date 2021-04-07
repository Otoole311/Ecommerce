const express = require('express');
const ClientController = require('../../controllers/client/ClientController');
const clientRouter = express.Router();
const clientController = require('../../controllers/client/ClientController');

//list selected shops
clientRouter.get('/shop/:id',ClientController.list_shop);

//list selected categories
clientRouter.get('/category/:id',ClientController.list_category);

//list selected subcategories
clientRouter.get('/subcategory/:id',ClientController.list_subcategory);

//list selected product
clientRouter.get('/product/:id',ClientController.list_product);

module.exports = clientRouter;