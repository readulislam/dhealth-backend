const express = require('express');
const { patientRegistration } = require('../controller/patients.controller');
const patientsRoute = express.Router();

patientsRoute.post('/patient-registration', patientRegistration)



module.exports = patientsRoute;