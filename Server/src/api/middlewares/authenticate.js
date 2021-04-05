const debug = require('debug')('app:middleware:authenticate');
const passportJWT  = require('../services/passport/config');
//import { ApplicationError } from '../helpers/errors';

//const DEBUG = debug('dev');
module.exports = {

/**
 * this function checks the request headers from the jwt.
 * it scans to see if there is a user associated with it and throws
 * back an unauthorized erro if there is nond.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
authenticate: (req, res, next) => {
    passportJWT.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            debug(err);
        return next(err);
    }

    if (!user) {
        /* throw new ApplicationError(
            401,
        'invalid token, please log in or sign up',
        ); */
        return 'invalid token, please log in or sign up';
    }

    req.user = user;
    debug(user);
    return next();
    })(req, res, next);
},
};