const express = require('express');
const { createEvent, getEvents, dropEventType } = require('../controller/eventTypes.controller');
const eventsRoute = express.Router();


eventsRoute.post('/add-eventType', createEvent)
eventsRoute.get('/get-eventTypes', getEvents)
eventsRoute.delete('/delete-eventTypes', dropEventType)









module.exports= eventsRoute;