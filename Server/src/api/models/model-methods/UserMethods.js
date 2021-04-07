"use strict"
const jwt = require('jsonwebtoken');
const {config} = require('dotenv');
const bcrypt = require('bcrypt');
let mongoose = require('mongoose');

config();

const jwtPrivateSecret = process.env.JWT_PRIVATE_SECRET.replace(/\\n/g, "\n");

module.exports = function(User){

    /**
     * Before the user data is saved, hash the user's password.
     */
    User.pre("save", async function (next) {
        if (!this.password || !this.isModified("password")) return next;

        this.password = await bcrypt.hashSync(
            this.password,10
        );
        next();
    });
    
    /**
     * This function displays the user instance in
     * a json format.
     * @returns User Object
     */
    User.methods.toJSON = function (){
        const user = this;
        const userObj = user.toObject();
        delete userObj.password;
        return userObj;
    }

    /**
     * This function compared the password inputed by a user to
     * the password saved in the database.
     * @param {String} password 
     * @returns true or false
     */
    User.methods.comparePassword = async function(password){
        return bcrypt.compareSync(password,this.password);
    }

    /**
     * This function generates a jwt verification token 
     * for user authentication.
     * @returns - jwt verification token (jwt)
     */
    User.methods.generateVerificationToken = function () {
        return jwt.sign({ id: this._id }, jwtPrivateSecret, {
            expiresIn: "10d",
            algorithm: "RS256",
        });
    };

    /**
     * Check if data exists in the database using the field name and value
     * @param {*} field - the field name of the model
     * @param {*} value - the value to search for
     * @returns 
     */
    User.statics.checkExistingField = async (field, value) => {
        const checkField = await mongoose.model('User').findOne({ [`${field}`]: value });
    
        return checkField;
    };
}