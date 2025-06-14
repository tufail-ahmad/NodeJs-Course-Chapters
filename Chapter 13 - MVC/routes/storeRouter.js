// External Module
const express = require("express");
const storeRouter = express.Router();

// Local Module
const homeControllers = require("../controllers/storeController");

storeRouter.get("/", homeControllers.getIndex);
storeRouter.get("/homes", homeControllers.getHomes);
storeRouter.get("/bookings", homeControllers.getBookings);
storeRouter.get("/favourites", homeControllers.getFavouriteList);

module.exports = storeRouter;
