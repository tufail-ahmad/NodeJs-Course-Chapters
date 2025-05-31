const http = require("http");
const testingSyntax = require("./syntax");
const runtime = require("./runtime");
const logical = require("./logical");

const handler = require("./user");
// Create a server instance and pass the request handler

const server = http.createServer(handler);

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
//   // testingSyntax();
//   // runtime();
//   logical();
// });
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
