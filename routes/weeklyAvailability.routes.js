const express = require('express');
const { createOneTime, getAvailabilityBydDate } = require('../controller/weeklyAvailability.controller');
const weeklyAvailabilityRoute = express.Router()


weeklyAvailabilityRoute.post('/add-weeklyAvailability', createOneTime)
weeklyAvailabilityRoute.get('/get-weeklyAvailability', getAvailabilityBydDate)


module.exports=weeklyAvailabilityRoute;