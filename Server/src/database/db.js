const mongoose = require('mongoose');
const {config} = require('dotenv');
const debug = require('debug')('app:db.js');

config();
const {NODE_ENV, DEV_DB} = process.env;
const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}

module.exports = function () {
   // const { MONGO_CLUSTER_URL = 'mongodb://localhost:27017', MONGO_DATABASE_NAME } = process.env;

    // Configure mongoose to use Promises, because callbacks are passe.
    mongoose.Promise = global.Promise;
    // Connect to the Mongo DB
    return mongoose.connect(DEV_DB, options)
    .then(() => {
        debug("Connected to Database.")
        //console.log("Connected to Database.")
    })
    .catch(err => {
        debug("Connection error")
        debug(err)
        //console.error("Connection error", err)
    });
};