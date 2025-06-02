const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log(req.url);
  next();
});

app.use("/", (req, res, next) => {
  console.log(req.method);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
