import express from 'express';
var app = express();
var port = process.env.PORT || 3000;

import mongoose from 'mongoose';
import { Country } from './api/models/covidModel.js';
import bodyParser from 'body-parser';

var db = mongoose.connection;

db.on('error', console.error);

db.once('open', function () {

    console.log("db connect");

    db.dropCollection("countries", function (err, result) {

        if (err) {

            console.log("error delete collection");

        } else {

            console.log("delete collection success");

        }

    });

 

});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Coviddb');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

import router from './api/routes/covidRoutes.js';

app.use('/', router);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);