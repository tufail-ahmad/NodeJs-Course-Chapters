const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body>
          <h1>Welcome to the Calculator</h1>
          <a href="/calculator">Go to Calculator</a>
        </body>
      </html>`);
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body>
          <h1>Calculator</h1>
          <form action="/calculate-result" method="POST">
            <input type="text" name="num1" placeholder="First number"/>
            <input type="text" name="num2" placeholder="Second number"/>
            <button type="submit">Sum</button>
          </form>
        </body>
      </html>`);
    return res.end();
  } else if (req.url === "/calculate-result" && req.method === "POST") {
    return sumRequestHandler(req, res);
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head><title>Calculator</title></head>
      <body>
        <h1>404 - Page Not Found</h1>
        <a href="/">Go Back Home</a>
      </body>
    </html>`);
  return res.end();
};

exports.requestHandler = requestHandler;
