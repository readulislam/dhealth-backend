const express = require('express');
const { createDateOverride, getDateOverrideByDate, dropDateOverride } = require('../controller/dateOverride.controller');
const dataOverrideRoute = express.Router();

dataOverrideRoute.post('/add-dateOverride', createDateOverride)
dataOverrideRoute.get('/get-dateOverride', getDateOverrideByDate)
dataOverrideRoute.delete('/delete-dateOverride', dropDateOverride)





module.exports = dataOverrideRoute;
