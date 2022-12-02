const express = require('express');
const { createEvent, getEvents } = require('../controller/eventTypes.controller');
const eventsRoute = express.Router();


eventsRoute.post('/add-event', createEvent)
eventsRoute.get('/get-events', getEvents)









module.exports= eventsRoute;