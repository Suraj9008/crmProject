// node modules
const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');

// loading express
const app = express()

// custome Libs
const winstonLogger = require('./server/libs/winstonLib');

// import routes
const users = require('./server/routes/users');
const images = require('./server/routes/s3');
const moments = require('./server/routes/moments');
const email = require('./server/routes/sendMail');
const conatct = require('./server/routes/contact');
// middelwares
app.use(cors());
app.use(express.json());
app.use('/user',users);
app.use('/image',images);
app.use('/mail',email);
app.use('/contact',conatct);


// DB connection
mongoose.connect(config.get('mongodbUrl'),{ useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => {
        winstonLogger.info('Connected to database ')
    })
    .catch( (err) => {
        winstonLogger.error(`Error connecting to the database. \n${err}`);
    })

const server = http.createServer(app)

// start server
server.listen(config.get('Port'),()=>{
    console.log("Express server started on port "+ config.get("Port"));
});