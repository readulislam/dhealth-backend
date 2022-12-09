const express = require('express');
const { patientRegistration, getPatientByPhone } = require('../controller/patients.controller');
const patientsRoute = express.Router();

patientsRoute.post('/patient-registration', patientRegistration)
patientsRoute.get('/patient-login', getPatientByPhone)



module.exports = patientsRoute;