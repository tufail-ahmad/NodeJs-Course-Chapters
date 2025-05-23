console.log("Hello from first.js");

const fs = require("fs");
fs.writeFile("output.txt", "Writing file", (err) => {
  if (err) console.error("error occurred");
  else console.log("File written successfully");
});
