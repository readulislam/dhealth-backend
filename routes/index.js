const express = require('express');

const departmentsRoute = require('./departments.routes');

const doctorsRoute = require('./doctors.routes');

const hospitalRoute = require('./hospitals.routes');

const statesRoute = require('./states.routes');
const eventsRoute = require('./eventTypes.routes');

const appRouter = express.Router()


appRouter.use(hospitalRoute);
appRouter.use(statesRoute);
// appRouter.use(citiesRoutes);
// appRouter.use(patientsRoute);
appRouter.use(doctorsRoute);
appRouter.use(departmentsRoute);
appRouter.use(eventsRoute);
// appRouter.use(weeklyAvailabilitiesRoute);


module.exports = appRouter;




