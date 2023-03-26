const mongoose = require("mongoose");
// const DB = process.env.DATABASE;
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB Connected Successfully."))
  .catch((error) => {
    console.log("DB connection failed");
    console.log(error);
    process.exit(1);
  });
