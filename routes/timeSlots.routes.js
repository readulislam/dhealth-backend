const express = require('express');
const { getTimeSlots } = require('../controller/timeSlots.controller');
const slotsRoute = express.Router()


slotsRoute.post('/get-slots',getTimeSlots )




module.exports = slotsRoute;