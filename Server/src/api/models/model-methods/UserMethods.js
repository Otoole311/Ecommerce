const jwt = require('jsonwebtoken');
const {config} = require('dotenv');

config();

const jwtPrivateSecret = process.env.JWT_PRIVATE_SECRET.replace(/\\n/g, "\n");

module.exports = function(User){
    User.methods.generateVerificationToken = function () {
        return jwt.sign({ id: this._id }, jwtPrivateSecret, {
            expiresIn: "10d",
            algorithm: "RS256",
        });
    };

    User.methods.method2 = function(){
        //do something
    };
}