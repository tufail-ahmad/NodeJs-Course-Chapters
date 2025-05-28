const http = require("http");
const handler = require("./user");
// Create a server instance and pass the request handler

const server = http.createServer(handler);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
