const express = require('express');
const { addAppointment, DoctorAppointmentList, patientAppointmentList } = require('../controller/appointments.controller');
const appointmentRoute = express.Router()

appointmentRoute.post('/add-appointment', addAppointment)
appointmentRoute.get('/get-doctorAppointmentList', DoctorAppointmentList)
appointmentRoute.get('patientAppointmentList', patientAppointmentList)



module.exports = appointmentRoute;