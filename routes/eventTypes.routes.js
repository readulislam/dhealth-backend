const express = require('express');
const { createEvent, getEvents } = require('../controller/eventTypes.controller');
const eventsRoute = express.Router();


eventsRoute.post('/add-eventType', createEvent)
eventsRoute.get('/get-eventTypes', getEvents)









module.exports= eventsRoute;