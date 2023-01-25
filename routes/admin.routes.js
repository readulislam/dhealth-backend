const express = require("express");
const { createAdmin, getAdmin } = require("../controller/admin.controller");

const adminRoute = express.Router();

adminRoute.post("/add-admin",createAdmin) ;

adminRoute.get("/get-admin", getAdmin );

module.exports = adminRoute;
