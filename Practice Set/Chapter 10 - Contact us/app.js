const express = require("express");
const path = require("path");

// local module
const homeRouter = require("./routes/homeRouter");
const contactUsRouter = require("./routes/contactUsRouter");
const rootDir = require("./utils/pathUtil");

const app = express();

app.use(homeRouter);
app.use(contactUsRouter);

app.use((req, res, next) => {
  console.log("fourth dummy middleware", req.url, req.method);
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
