//requires
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app:Server');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
//const db = require('./src/database/db');
const db = require('./src/database/mongoCloudDB');
const { createServer } = require('http');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const {config} = require('dotenv');

config()

//assignments
const app = express();
const port = process.env.PORT || 3000;

//app sets
app.set('views', './src/views');
app.set('view engine', 'ejs');

//app use
app.use(express.static(path.join(__dirname, '/src/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

passport.initialize();

//db connection
db().then(() => createServer(app).listen(port, ()=>{
    debug(`listening on port + ${chalk.green(port)}`);
})).catch((err) =>{
    console.log({error: err});
});

//routes
const adminRouter = require('./src/api/routes/admin/AdminRoutes');
const ClientRouter = require('./src/api/routes/client/ClientRoutes');
const adminAuthRouter = require('./src/api/routes/admin/auth/AuthRoutes');

app.get('/',function(req,res){
    res.status(200).send("Connected to server")
})

//use routes
app.use('/admin',adminRouter);
app.use('/admin/auth',adminAuthRouter);
app.use('/api/ci',ClientRouter);
