const debug = require('debug')('app:AuthController');
const User = require('../../../models/User');
const passport = require('passport');
const passportLocal = require('../../../services/passport/passport-local');
//const  {hashString} = require('../../../utils/helpers');
//const bcrypt = require('bcrypt');
//const saltRounds = 10;

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
                        //console.log('Eror is here')
                        //console.log(user)
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
        /* const password = req.body.password;
        const hashedPassword = bcrypt.hashSync(password, saltRounds);

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        newUser.save()
        .then(() =>{
            res.status(201).json({Message: "Register Successful"});
        })
        .catch(CreateError =>{
            debug(CreateError);
            res.status(400).send({
                "Failed to create User": CreateError.message
            });
        }) */
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

        /* const email = req.body.email;
        const password = req.body.password;
        User.findOne({email: email}, function(err, UserData){
            if(err){
                debug(err.message);
                res.status(401).json({Error: "User not found"});
            }
            //console.log(UserData)
            if(bcrypt.compareSync(password,UserData.password)){
                res.status(200).json({
                    Message: "Login Successful"
                });
            }else{
                res.status(401).json({Message: "Invalid credentials"});
            }
            
        }); */

    },

    protectedRoute: async (req, res) => {
        res.status(200).json({
            status: "success",
            data: {
            message: "Yes you are. You are a Thor-n times developer",
            },
        });
    }, 
}
