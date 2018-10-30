const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

const route = require('./route');

var app = express();

const PORT = 8080;

mongoose.connect('mongodb://localhost:27017/todolist');

mongoose.connection.on('connected', ()=>{
    console.log("Connected to MongoDB");
});

mongoose.connection.on('err', (err)=>{
    console.log(err);
});

app.use(cors());

app.use(bodyparser.json());

app.use('/', route);

app.listen(PORT, ()=>{
    console.log("Server has been started and listening to the port : " + PORT);
});

