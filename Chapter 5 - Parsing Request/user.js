const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
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
  } else if (
    req.url.toLowerCase() === "/create-user" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const parsedBody = new URLSearchParams(fullBody);
      // const bodyObject = {};
      // parsedBody.forEach((value, key) => {
      //   bodyObject[key] = value;
      // });
      const bodyObject = Object.fromEntries(parsedBody);
      console.log(bodyObject);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html><head><title>Complete Coding</title></head>");
  res.write("<body><h1>404 - Page Not Found</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;
