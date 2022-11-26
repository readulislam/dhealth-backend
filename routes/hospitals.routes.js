const express = require('express');
const { createHospital, getHospitals } = require('../controller/hospitals.controller');
const hospitalRoute = express.Router();



hospitalRoute.post('/add-hospital',createHospital)

hospitalRoute.get('/get-hospitals',getHospitals)





module.exports= hospitalRoute;