const express = require('express');
const { createDoctor, getDoctors, dropDoctor, getDoctorByPhone, getDoctorBySearch } = require('../controller/doctors.controller');
const doctorsRoute = express.Router();



doctorsRoute.post('/add-doctor', createDoctor)
doctorsRoute.get('/get-doctors',  getDoctors)
doctorsRoute.delete('/delete-doctor',  dropDoctor)
doctorsRoute.get('/get-doctorByNumber',  getDoctorByPhone)
doctorsRoute.get('/get-doctorBySearch',  getDoctorBySearch)















module.exports = doctorsRoute;