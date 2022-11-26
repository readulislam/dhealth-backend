const express = require('express');
const citiesRoutes = require('./cities.routes');
const hospitalRoute = require('./hospitals.routes');
const patientsRoute = require('./patients.routes');
const statesRoute = require('./states.routes');
const appRouter = express.Router()


appRouter.use(hospitalRoute);
appRouter.use(statesRoute);
appRouter.use(citiesRoutes);
appRouter.use(patientsRoute);


module.exports = appRouter;




