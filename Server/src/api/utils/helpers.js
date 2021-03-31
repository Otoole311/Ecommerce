const crypto = require('crypto');

/**
 * This function hashes the password.
 * @param {String} str user password
 * @returns 
 */
exports.hashString = (str) =>{
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512',salt).update(str).digest('base64');

    return salt + hash;
}