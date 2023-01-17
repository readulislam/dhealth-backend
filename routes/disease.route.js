const express = require('express');
const { createDisease, getDisease } = require('../controller/disease.controller');

const diseasesRoute = express.Router();

diseasesRoute.post('/add-disease',createDisease)
diseasesRoute.get('/get-diseases',getDisease)


module.exports = diseasesRoute;