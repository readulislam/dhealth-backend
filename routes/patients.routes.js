const express = require('express');
const { patientRegistration, getPatientByPhone, getAllPatient } = require('../controller/patients.controller');
const patientsRoute = express.Router();

patientsRoute.post('/patient-registration', patientRegistration)
patientsRoute.get('/patient-login', getPatientByPhone)
patientsRoute.get('/get-allPatient', getAllPatient)



module.exports = patientsRoute;