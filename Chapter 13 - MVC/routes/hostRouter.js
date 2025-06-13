// External Module
const express = require("express");
const hostRouter = express.Router();

// Local Module
const homeControllers = require("../controllers/homes");

hostRouter.get("/add-home", homeControllers.getAddHome);
hostRouter.post("/add-home", homeControllers.postAddHome);

exports.hostRouter = hostRouter;
