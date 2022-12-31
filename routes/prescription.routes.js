const express = require('express');
const { createPrescription, getPrescriptionByPatientId, getPrescriptionByDoctorId,  } = require('../controller/prescription.controller');

const prescriptionRoute = express.Router();

prescriptionRoute.post('/add-prescription', createPrescription)
prescriptionRoute.get('/get-prescriptionByPatientId', getPrescriptionByPatientId)
prescriptionRoute.get('/get-prescriptionByDoctorId', getPrescriptionByDoctorId)







module.exports = prescriptionRoute;