const express = require('express');
const { createOneTime, getAvailabilityBydDate, getAvailabilityByDoctorId } = require('../controller/weeklyAvailability.controller');
const weeklyAvailabilityRoute = express.Router()


weeklyAvailabilityRoute.post('/add-weeklyAvailability', createOneTime)
weeklyAvailabilityRoute.get('/get-weeklyAvailability', getAvailabilityBydDate)
weeklyAvailabilityRoute.put('/update-weeklyAvailability', getAvailabilityBydDate)
weeklyAvailabilityRoute.get('/get-weeklyAvailability', getAvailabilityByDoctorId)


module.exports=weeklyAvailabilityRoute;