const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const app = express();
require('dotenv/config');

//DB CONNECTION
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
    () => console.log('connected')
);

//MIDDLEWARE
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//ROUTES
const getRoutes = require('./routes.js');
app.use(getRoutes);

//LISTEN
app.listen(3000)