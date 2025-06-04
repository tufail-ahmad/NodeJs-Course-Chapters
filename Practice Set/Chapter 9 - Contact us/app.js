const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("first dummy middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("second dummy middleware", req.url, req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log("third middleware", req.url, req.method);
//   res.send("<h1>Welcome to Complete Coding</h1>");
// });

app.get("/", (req, res, next) => {
  console.log("Handling / for get", req.url, req.method);
  res.send("<h1>Welcome to Complete Coding</h1>");
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for get", req.url, req.method);
  res.send(
    `
    <h1>Please give your details here</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name" required>
      <input type="email" name="email" placeholder="Enter your email" required>
      <button type="submit">Submit</button>
    </form>
  `
  );
});

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for post", req.url, req.method);
  res.send(`<h1>We will contact you shortly!</h1>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
