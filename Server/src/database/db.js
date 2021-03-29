const mongoose = require('mongoose');

module.exports = function () {
   // const { MONGO_CLUSTER_URL = 'mongodb://localhost:27017', MONGO_DATABASE_NAME } = process.env;

    // Configure mongoose to use Promises, because callbacks are passe.
    mongoose.Promise = global.Promise;
    // Connect to the Mongo DB
    return mongoose.connect('mongodb://localhost:27017/Commerce', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    }).then(() => console.log("Connected to Database."))
    .catch(err => console.error("Connection error", err));
};