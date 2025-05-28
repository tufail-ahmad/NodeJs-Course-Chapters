const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("1. Start of script");
  // Synchronous (blocking) operation
  console.log("2. Reading file synchronously");
  res.on("end", () => {
    const dataSync = fs.readFileSync("user-details.txt", "utf8");
  });
  console.log("3. Synchronous read complete");
  // Asynchronous (non-blocking) operation
  console.log("4. Reading file asynchronously");
  res.on("data", () => {
    fs.readFile("user-details.txt", "utf8", (err, dataAsync) => {
      if (err) throw err;
      console.log("6. Asynchronous read complete");
    });
  });
  console.log("5. End of script");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
