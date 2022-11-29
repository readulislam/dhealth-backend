const express = require("express");
const { createCities, getCitiesByStateId } = require("../controller/cities.controller");
const citiesRoute = express.Router();

citiesRoute.post("/add-cities", createCities);

citiesRoute.get("/get-citiesByStateId", getCitiesByStateId);

module.exports = citiesRoute;
