const express = require('express');
const { createDepartment, getDepartments } = require('../controller/departments.controller');
const departmentsRoute = express.Router();

departmentsRoute.post('/add-department',createDepartment)
departmentsRoute.get('/get-departments',getDepartments)


module.exports = departmentsRoute;