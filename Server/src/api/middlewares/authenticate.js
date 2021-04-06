const debug = require('debug')('app:middleware:authenticate');
const passportJWT  = require('../services/passport/config');
//import { ApplicationError } from '../helpers/errors';

//const DEBUG = debug('dev');
module.exports = {

/**
 * this function checks the request headers for the cookie name 'jwt'.
 * it scans to see if there is a user associated with a token and throws
 * back an unauthorized error if none is found.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
authenticate: (req, res, next) => {
    passportJWT.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
            debug(err)
        return next(err);
    }

    if (!user) {
        /* throw new ApplicationError(
            401,
        'invalid token, please log in or sign up',
        ); */
        //return 'invalid token, please log in or sign up';
        res.status(401).send({UnAuthorised: "invalid token, please log in or sign up"})
        return
    }

    req.user = user;
    debug(req.user);
    return next();
    })(req, res, next);
},
};