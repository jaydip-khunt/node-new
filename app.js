// Import events module
const express 	= module.exports = require('express');
// http    	= module.exports = require('http');

/*
 * Setup the environments
 */
const app = module.exports = express ();

// import routes
const apiRouter = require('./routes/api');

app.use('/api',apiRouter);

// var webRouter = require('./routes/web');

//Starting server 
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});