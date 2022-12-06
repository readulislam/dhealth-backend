const express = require('express');
const { createDateOverride, getDateOverrideByDate } = require('../controller/dateOverride.controller');
const dataOverrideRoute = express.Router();

dataOverrideRoute.post('/add-dateOverride', createDateOverride)
dataOverrideRoute.get('/get-dateOverride', getDateOverrideByDate)





module.exports = dataOverrideRoute;
