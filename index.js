import express from 'express';

//import the allRoutes function from our restRoute.js file
import { userRoutes, profileRoutes, loggedInUserRoutes } from './src/route/restRoute.js';

//import mongoose
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// const express = require('express');
const app = express();

// Setup the port for the server
const port = 4000;

//set connection between the API and mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/testDB', {
    //avoid errors
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//parse requests and make it redable for our API
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// app.use(express.bodyParser({limit: '50mb'}));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(function (req, res, next) {
    const corsWhitelist = [
        'http://localhost:3000',
        'http://192.168.10.62:3000',
        'http://192.168.10.247:3000'
    ];

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', "*");

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//call the allRoute function and send app which initializes express
userRoutes(app);
profileRoutes(app);
loggedInUserRoutes(app);

// When a get request is made to / or the default page 
// display a message.
app.get('/', (req, res) =>
    res.send(`Your node and express server is running on port: ${port}`)
);

//print a message to the cli
app.listen(port, () => {
    console.log("restAPI is running on port: " + port);
});