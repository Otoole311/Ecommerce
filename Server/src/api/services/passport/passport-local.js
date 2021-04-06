const debug = require('debug')('app:passport-local');
const {Strategy} = require('passport-local');
const passport = require('passport');
const User = require('../../models/User');

const authFields = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
};



passport.use(
    'login',
    new Strategy(authFields, async (req, email, password, cb) =>{
        try{
            //find user with email provided
            const user = await User.findOne({
                email: email
            });

            //check if user exists
            if(!user || !user.password){
                return cb(null,false, {
                    message: 'Invalid Credentials.'
                });
            }

            //check if passwords match
            const CheckPassword = await user.comparePassword(password);
            if(!CheckPassword){
                return cb(null,false,{
                    message: 'Invalid Credentials.'
                });
            }

            return cb(null,user,{
                message: 'Login successful'
            });
        }
        catch(error){
            debug(error);
            return cb(null, false, {statusCode: 400, message: error.message});
        }
    }), 
);

passport.use(
    'register',
    new Strategy(authFields,async (req, email, password, cb) =>{
        //console.log('inside passport')
        try{
            //console.log('Entering')
            const checkEmail = await User.checkExistingField('email',email);

            //check if email exists
            if(checkEmail){
                return cb(null,false,{
                    statusCode: 409, //conflict,
                    message: 'Email already registered, log in instead',
                });
            }

            //check if username exists
            const checkUserName = await User.checkExistingField('name',req.body.name);
            if(checkUserName){
                return cb(null,false,{
                    statusCode: 409, //conflict,
                    message: 'Username exists, please try another',
                });
            }
            
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
    
            //save user to database
            await newUser.save()
            return cb(null, newUser);
        }
        catch(error){
            debug(error)
            return cb(null, false, {statusCode: 400, message: error.message});
        }
    })
)