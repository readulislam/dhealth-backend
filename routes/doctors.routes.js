const express = require('express');
const { createDoctor, getDoctors, dropDoctor, getDoctorByPhone, getDoctorBySearch, updateFiled, upload, updateFollowupField } = require('../controller/doctors.controller');
const doctorsRoute = express.Router();



doctorsRoute.post('/add-doctor',upload, createDoctor)
// doctorsRoute.post('/add-doctor', createDoctor)
doctorsRoute.get('/get-doctors',  getDoctors)
doctorsRoute.delete('/delete-doctor',  dropDoctor)
doctorsRoute.get('/get-doctorByNumber',  getDoctorByPhone)
doctorsRoute.get('/get-doctorFiltering',  getDoctorBySearch)
doctorsRoute.put('/update',  updateFiled)
doctorsRoute.put('/updatefollowup',  updateFollowupField)
















module.exports = doctorsRoute;