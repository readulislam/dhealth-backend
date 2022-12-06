const express = require('express');
const { createOneTime } = require('../controller/weeklyAbailabities.controller');
const weeklyAvailabilitiesRoute = express.Router()


weeklyAvailabilitiesRoute.post('/weeklyAvailabilities', createOneTime)


module.exports=weeklyAvailabilitiesRoute;