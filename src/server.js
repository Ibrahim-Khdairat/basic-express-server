'use strict';


const express = require('express');
const server = express();
server.use(express.json());

const notFoundHandler = require('./errors-handler/404');
const errorHandler = require('./errors-handler/500');

const validatorMiddleware = require('./middleware/validator');
const loggerMiddleware = require('./middleware/logger');
server.use(loggerMiddleware);


server.get('/', (req, res) => {
    res.status(200).send('Every Thing Is Working Good  :)')
});



server.get('/person', (req, res) => {
    // http://localhost:3000/person?name=ibrahim
    let message = {
        name: req.query.name
    }
    // res.status(200).json(message);


    if (req.query.name !== undefined) {
        // res.status(200).send(`Hi " ${req.query.name} " From Search Query`);
        res.status(200).json(message)
    } else {
        errorHandler();
    }
});

server.get('/bad', (req, res, next) => {
    next('error from bad end point');
});






server.use('*', notFoundHandler)
server.use(errorHandler);

function start(port) {
    server.listen(port, () => console.log(`listining on port ${port}`))
}


module.exports = {
    start,
    server
}
