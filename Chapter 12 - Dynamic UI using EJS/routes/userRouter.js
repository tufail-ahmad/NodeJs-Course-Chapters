const express = require("express");
const userRouter = express.Router();
const path = require("path");

// local module
const rootDir = require("../utils/pathUtil");

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "user.html"));
});

module.exports = userRouter;
