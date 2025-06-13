// External Module
const express = require("express");
const userRouter = express.Router();

// Local Module
const homeControllers = require("../controllers/homes");

userRouter.get("/", homeControllers.getHomes);

module.exports = userRouter;
