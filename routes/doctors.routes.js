const express = require('express');
const { createDoctor, getDoctors, dropDoctor } = require('../controller/doctors.controller');
const doctorsRoute = express.Router();



doctorsRoute.post('/add-doctor', createDoctor)
doctorsRoute.get('/get-doctors',  getDoctors)
doctorsRoute.delete('/delete-doctor',  dropDoctor)















module.exports = doctorsRoute;