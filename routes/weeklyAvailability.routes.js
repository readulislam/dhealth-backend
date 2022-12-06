const express = require('express');
const { createOneTime } = require('../controller/weeklyAvailability.controller');
const weeklyAvailabilityRoute = express.Router()


weeklyAvailabilityRoute.post('/add-weeklyAvailability', createOneTime)


module.exports=weeklyAvailabilityRoute;