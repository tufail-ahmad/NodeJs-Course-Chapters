const express = require("express");
const ContactUsRouter = express.Router();
const path = require("path");

// local module
const rootDir = require("../utils/pathUtil");

ContactUsRouter.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for get", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

ContactUsRouter.use(express.urlencoded());

ContactUsRouter.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for post", req.url, req.method, req.body);
  res.sendFile(path.join(rootDir, "views", "submit.html"));
});

module.exports = ContactUsRouter;
