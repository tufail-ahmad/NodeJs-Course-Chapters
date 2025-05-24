const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head><title>Complete Coding</title></head>");
    res.write("<body><h1>Enter your details</h1>");
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="username" placeholder="Enter your name"/><br/>'
    );
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/>');
    res.write('<label for="female">Female</label>');
    res.write(
      '<input type="radio" id="female" name="gender" value="female"/><br/>'
    );
    res.write('<button type="submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/create-user" && req.method === "POST") {
    fs.writeFileSync("user.txt", "Tufail");
    res.statusCode = 302;
    res.setHeader("Location", "/");
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
