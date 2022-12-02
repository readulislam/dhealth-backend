const express = require('express');
const { createDoctor, getDoctors } = require('../controller/doctors.controller');
const doctorsRoute = express.Router();



doctorsRoute.post('/add-doctor', createDoctor)
doctorsRoute.get('/get-doctors',  getDoctors)















module.exports = doctorsRoute;