require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');

/**
 * DB config
 */
require('./config/db.config');

/**
 * Configure express
 */
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//CORS on ExpressJS crossorigin problems
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

/**
 * Configure routes
 */
const router = require('./config/routes.js');
app.use('/', router);

/**
 * Configure CORS
 */
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (error, req, res, next) {
    console.error(error);

    res.status(error.status || 500);

    const data = {}

    if (error instanceof mongoose.Error.ValidationError) {
        res.status(400);
        for (field of Object.keys(error.errors)) {
            error.errors[field] = error.errors[field].message
        }
        data.errors = error.errors
    } else if (error instanceof mongoose.Error.CastError) {
        error = createError(404, 'Resource not found')
    }

    data.message = error.message;
    res.json(data);
});

/** 
 * Listen on provided port
 */
const port = normalizePort(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Helper functions

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}