const debug = require('debug')('app:AuthController');
const User = require('../../../models/User');
const passport = require('passport');
const passportLocal = require('../../../services/passport/passport-local');

/**
 * This function creates a cookie from the token
 * @param {User} user - the user data model
 * @param {int} statusCode - the status code returned from the server.
 * @param {*} req - the user request made
 * @param {*} res - the response returned
 */
const createCookieFromToken = (user, statusCode, req,res) =>{
    const token = user.generateVerificationToken();
    const cookieOptions = {
        expires: new Date(Date.now()+ 10 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: req.secure || req.headers["x-forward-proto"] === "https",
    };
    res.cookie("jwt", token, cookieOptions);

    res.status(statusCode).json({
        status: "success",
        token,
        data: {user,},
    });
}


module.exports = {

    //Register
    register: async (req, res, next) =>{

        passport.authenticate(
            "register",
            {session: false},
            async (err,user, info) =>{
                console.log(user)
                try{
                    if(err || !user){
                        const{statusCode = 400, message} = info;
                        debug(err)
                        return res.status(statusCode).json({
                            status: "error",
                            error:{
                                message,
                            },
                        });
                    }
                    createCookieFromToken(user,201,req,res)
                }
                catch(error){
                    debug(error)
                    throw error;
                }
            }
        )(req,res,next);
    },

    //Login user
    login: (req,res,next) =>{
        passport.authenticate(
            "login", { session: false }, (err, user, info) => {
            if (err || !user) {
                let message = err;
                if (info) {
                message = info.message;
                }
                return res.status(401).json({
                status: "error",
                error: {
                    message,
                },
                });
            }
            // generate a signed son web token with the contents of user object and return it in the response
            createCookieFromToken(user, 200, req, res);
        })(req, res, next);
    },
}
