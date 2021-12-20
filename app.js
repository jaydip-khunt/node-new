// Import events module
const express  = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
// http     = require('http');

/*
 * Setup the environments
 */
const app = express ();
app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(cors());
if(process.env.NODE_ENV = 'development'){
	app.use(cors({'origin':`http://127.0.0.1:3000`}));
}

// import routes
const apiRouter = require('./routes/api');

app.use('/api',apiRouter);


// var webRouter = require('./routes/web');

//Starting server 
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});

