const express = require('express');
const { createOneTime, getAvailabilityBydDate, getAvailabilityByDoctorId, dropAvailability, AllAvailability } = require('../controller/weeklyAvailability.controller');
const weeklyAvailabilityRoute = express.Router()


weeklyAvailabilityRoute.post('/add-weeklyAvailability', createOneTime)

weeklyAvailabilityRoute.get('/get-weeklyAvailabilityByDate', getAvailabilityBydDate)
weeklyAvailabilityRoute.get('/get-weeklyAvailabilityByDoctorId', getAvailabilityByDoctorId)

weeklyAvailabilityRoute.delete('/delete-availability', dropAvailability)
weeklyAvailabilityRoute.get('/all-availability',AllAvailability )
module.exports=weeklyAvailabilityRoute;