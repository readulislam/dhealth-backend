const express = require('express');
const { createOneTime } = require('../controller/weeklyAvailability.controller');
const weeklyAvailabilityRoute = express.Router()


weeklyAvailabilityRoute.post('/weeklyAvailability', createOneTime)


module.exports=weeklyAvailabilityRoute;