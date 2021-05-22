const mongoose = require('mongoose');
const debug = require('debug')('app:database:mongoCloudDB')
const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: "Sports"
}
//const uri = "mongodb+srv://Otoole:monogocloud1234@cluster0.dl8xw.mongodb.net/test?authSource=admin&replicaSet=atlas-u5voox-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
//const client = new MongoClient(uri,options);
const uri = "mongodb+srv://Otoole:monogocloud1234@cluster0.dl8xw.mongodb.net/test";
module.exports = function (){
    return  mongoose.connect(uri,options)
            .then(()  => {
                debug("Connected to Atlas Database")
                //console.log("connected to database")
            // Make the appropriate DB calls
            //await  listDatabases(client); 
            })
            .catch(err =>{
                console.log("Connection failed")
                debug("Connection failed")
                debug(err);
            });
};