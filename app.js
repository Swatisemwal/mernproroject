const dotenv = require("dotenv");
const express = require("express");
const app = express();
require("./db/connection");

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT;

app.use(require("./router/auth"));

// app.get("/", (req, res) => {
//   res.send(`welcome home swati`);
// });
app.get("/about", (req, res) => {
  res.send(`know about swati`);
});
app.get("/contact", (req, res) => {
  res.send(`try to contact swati`);
});
app.get("/signin", (req, res) => {
  res.send(`welcome to signin`);
});
app.get("/signup", (req, res) => {
  res.send(`welcome to signup`);
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
