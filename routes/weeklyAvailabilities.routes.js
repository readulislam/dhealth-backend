const express = require('express');
const { createOneTime, getAvailabilityBydDate, getAvailabilityByDoctorId, dropAvailability, AllAvailability, UpdateAvailability, UpdateAvailabilityEmpty } = require('../controller/weeklyAvailabilities.controller');
const weeklyAvailabilityRoute = express.Router()


weeklyAvailabilityRoute.post('/add-weeklyAvailability', createOneTime)

weeklyAvailabilityRoute.get('/get-weeklyAvailabilityByDate', getAvailabilityBydDate)
weeklyAvailabilityRoute.get('/get-weeklyAvailabilityByDoctorId', getAvailabilityByDoctorId)

weeklyAvailabilityRoute.delete('/delete-availability', dropAvailability)
weeklyAvailabilityRoute.get('/all-availability',AllAvailability )
weeklyAvailabilityRoute.put('/update-availability',UpdateAvailability )
weeklyAvailabilityRoute.put('/set-empty',UpdateAvailabilityEmpty )
module.exports=weeklyAvailabilityRoute;