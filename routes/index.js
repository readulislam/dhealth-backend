const express = require('express');

const departmentsRoute = require('./departments.routes');

const doctorsRoute = require('./doctors.routes');
const citiesRoutes = require('./cities.routes');
const patientsRoute = require('./patients.routes');

const hospitalRoute = require('./hospitals.routes');

const statesRoute = require('./states.routes');
const eventsRoute = require('./eventTypes.routes');
const dataOverrideRoute = require('./dateOverride.routes');
const weeklyAvailabilityRoute = require('./weeklyAvailability.routes');

const slotsRoute = require('./timeSlots.routes');

const appRouter = express.Router()

appRouter.use(slotsRoute)
appRouter.use(hospitalRoute);
appRouter.use(statesRoute);
appRouter.use(citiesRoutes);
appRouter.use(patientsRoute);
appRouter.use(doctorsRoute);
appRouter.use(departmentsRoute);
appRouter.use(eventsRoute);
appRouter.use(dataOverrideRoute);
appRouter.use(weeklyAvailabilityRoute);



module.exports = appRouter;




