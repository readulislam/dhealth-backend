const express = require('express');
const { getTimeSlots, getAllslots, dropSlots } = require('../controller/timeSlots.controller');
const slotsRoute = express.Router()


slotsRoute.post('/get-slots',getTimeSlots )
slotsRoute.get('/get-all-slots',getAllslots )
slotsRoute.delete('/drop-slot',dropSlots )




module.exports = slotsRoute;