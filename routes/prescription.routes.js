const express = require('express');
const { createPrescription, getPrescriptionByPatientId,  } = require('../controller/prescription.controller');

const prescriptionRoute = express.Router();

prescriptionRoute.post('/add-prescription', createPrescription)
prescriptionRoute.get('/get-prescriptionByPatientId', getPrescriptionByPatientId)







module.exports = prescriptionRoute;