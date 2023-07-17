const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('../config');
const cors =require("cors");
mongoose.Promise = global.Promise;

const apiController = require('../controllers/apiController');
const setupController = require('../controllers/setupController');


const port = process.env.PORT || 4000;       

mongoose.connect(config.getDbConnectionString());  

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

apiController(app);
setupController(app);

app.listen(port);

// node '.\inital setup\app.js'