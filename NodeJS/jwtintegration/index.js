let express =require('express');
let app = express();

let bodyparser = require('body-parser');
let mongoose =require('mongoose');

let jwt = require('jsonwebtoken');

global.config = require('./config/config');

