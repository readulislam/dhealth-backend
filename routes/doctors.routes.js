const express = require('express');
const { upload, createDoctor, getDoctors } = require('../controller/doctors.controller');
const doctorsRoute = express.Router();



doctorsRoute.post('/add-doctor', upload.single('img'), createDoctor)
doctorsRoute.get('/get-doctors',  getDoctors)















module.exports = doctorsRoute;