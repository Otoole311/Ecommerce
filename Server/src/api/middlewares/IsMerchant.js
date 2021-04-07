const debug = require('debug')('app:middleware:IsMerchant');

module.exports = {

    /**
     * This function checks the request for the user information.
     * It checks if the user type is a merchant or not.
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     * @returns 
     */
    isMerchant: (req,res,next) =>{
        if(!req.user){
            res.status(403).send({
                Error: 'Forbidden to view this route'
            })
            return;
        }

        if(req.user.type != 'merchant'){
            res.status(403).send({
                Error: 'Forbidden to view this route. Contact us if you are an admin.'
            })
            return;
        }

        return next();
    }
}