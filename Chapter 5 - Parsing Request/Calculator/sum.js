const sumRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  const body = [];
  req.on("data", (chunk) => body.push(chunk));
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.num1) + Number(bodyObj.num2);
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Calculator Result</title></head>
        <body>
          <h1>Your Sum is ${result}</h1>
        </body>
      </html>
    `);
    return res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler;
