const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Complete Coding</title></head>");
    res.write("<body><h1>Welcome to Complete Coding</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Complete Coding</title></head>");
    res.write("<body><h1>Welcome to the Products page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html><head><title>Complete Coding</title></head>");
  res.write("<body><h1>404 - Page Not Found</h1></body>");
  res.write("</html>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
