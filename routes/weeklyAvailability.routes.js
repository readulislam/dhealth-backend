const express = require('express');
const { createOneTime, getAvailabilityBydDate, getAvailabilityByDoctorId } = require('../controller/weeklyAvailability.controller');
const weeklyAvailabilityRoute = express.Router()


weeklyAvailabilityRoute.post('/add-weeklyAvailability', createOneTime)

weeklyAvailabilityRoute.get('/get-weeklyAvailabilityByDate', getAvailabilityBydDate)
weeklyAvailabilityRoute.get('/get-weeklyAvailabilityByDoctorId', getAvailabilityByDoctorId)


module.exports=weeklyAvailabilityRoute;