const app = require("./app");
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');

const port = process.env.APPLICATION_PORT;

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});

let URL = process.env.DATABASE_URL;
let options = {user: '', pass: '', autoIndex: true};
mongoose.connect(URL, options, (error) => {
  error ? console.log(error) : console.log("Database Connected")
});