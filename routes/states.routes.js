const express = require('express');
const { createStates, getStates } = require('../controller/states.controller');

const statesRoute = express.Router();

statesRoute.post('/add-states', createStates)
statesRoute.get('/get-states', getStates)







module.exports = statesRoute;