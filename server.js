const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config()

const port = process.env.PORT || 5000;
const PWD = process.env.PWD;
const USER = process.env.USER;
mongoose
  .connect(
    `mongodb+srv://${USER}:${PWD}@cluster0.xu8jhiq.mongodb.net/MYCONTACTS?retryWrites=true&w=majority`
  )
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/contactApp", require("./routes"));

app.listen(port, (err) => {
  if (err) throw err;
  console.log("server is running ...");
});
