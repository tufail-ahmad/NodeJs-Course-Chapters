const express = require("express");
const homeRouter = express.Router();
const path = require("path");

// local module
const rootDir = require("../utils/pathUtil");

homeRouter.get("/", (req, res, next) => {
  console.log("Handling / for get", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = homeRouter;
