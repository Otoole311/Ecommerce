const Category = require('../../models/Category');
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

    /**
     * Read functions
     */

    /**
     * Update Functions
     */

    /**
     * Delete functions
     */
}