const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./.env" });

const DB = process.env.DATABASE;

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindModify: false,
//   })
//   .then(() => {
//     console.log("connection succesful");
//   })
//   .catch((err) => console.log("connection declined"));

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB Connected Successfully."))
  .catch((error) => {
    console.log("DB connection failed");
    console.log(error);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send(`welcome home swati`);
});
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

app.listen(3000, () => {
  console.log("server is running");
});
