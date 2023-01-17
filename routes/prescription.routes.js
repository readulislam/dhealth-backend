const express = require('express');
const { createPrescription,  getPrescriptionByDoctorId, uploadPrescription, getPrescription, getPrescriptionByFollowUp,  } = require('../controller/prescription.controller');

const prescriptionRoute = express.Router();

prescriptionRoute.post('/add-prescription',uploadPrescription, createPrescription)
prescriptionRoute.get('/get-prescription', getPrescription)
prescriptionRoute.get('/get-prescriptionByFollowUp', getPrescriptionByFollowUp)
prescriptionRoute.get('/get-prescriptionByDoctorId', getPrescriptionByDoctorId)







module.exports = prescriptionRoute;