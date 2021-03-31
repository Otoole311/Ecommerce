const debug = require('debug')('app:AuthController');
const User = require('../../../models/User');
const  {hashString} = require('../../../utils/helpers');
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = {

    //Register
    register: function(req, res){
        const password = req.body.password;
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
        })
    },

    //Login user
    login: function(req,res){
        const email = req.body.email;
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
            
        });

    }
}