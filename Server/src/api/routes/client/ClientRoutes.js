const express = require('express');
const ClientController = require('../../controllers/client/ClientController');
const clientRouter = express.Router();
const clientController = require('../../controllers/client/ClientController');

//list all categories
clientRouter.get('/categories',ClientController.list_categories);

module.exports = clientRouter;