const express = require('express');
const { createPrescription, getPrescriptionByPatientId, getPrescriptionByDoctorId, uploadPrescription,  } = require('../controller/prescription.controller');

const prescriptionRoute = express.Router();

prescriptionRoute.post('/add-prescription',uploadPrescription, createPrescription)
prescriptionRoute.get('/get-prescriptionByPatientId', getPrescriptionByPatientId)
prescriptionRoute.get('/get-prescriptionByDoctorId', getPrescriptionByDoctorId)







module.exports = prescriptionRoute;