const express = require('express');
const { addAppointment, DoctorAppointmentList, patientAppointmentList, DoctorAppointmentAll, patientAppointmentComplete, AppointmentDelete } = require('../controller/appointments.controller');
const appointmentRoute = express.Router()

appointmentRoute.post('/add-appointment', addAppointment)
//date and doctorId
appointmentRoute.get('/get-doctorAppointmentList', DoctorAppointmentList) 
// only doctorId
appointmentRoute.get('/get-doctorAppointmentAll', DoctorAppointmentAll)
appointmentRoute.get('/patientAppointmentList', patientAppointmentList)
appointmentRoute.put('/patientAppointmentComplete', patientAppointmentComplete)
appointmentRoute.delete('/appointmentDelete',AppointmentDelete)



module.exports = appointmentRoute;