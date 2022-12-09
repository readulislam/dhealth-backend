const express = require('express');
const { getTimeSlots, getAllslots, dropSlots, updateSlot } = require('../controller/timeSlots.controller');
const slotsRoute = express.Router()


slotsRoute.post('/get-slots',getTimeSlots )
slotsRoute.get('/get-all-slots',getAllslots )
slotsRoute.delete('/drop-slot',dropSlots )
slotsRoute.put('/update-slot',updateSlot )




module.exports = slotsRoute;