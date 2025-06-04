// External Modules
const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  console.log("came in first middleware", req.url, req.method);
  //res.send("<p>Came from first middleware</p>");
  next();
});

app.post("/submit-details", (req, res, next) => {
  console.log("came in second middleware", req.url, req.method);
  res.send("<h1>Hello from Express!</h1>");
});

app.use("/", (req, res, next) => {
  console.log("came in another middleware", req.url, req.method);
  res.send("<p>Came from another middleware</p>");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
