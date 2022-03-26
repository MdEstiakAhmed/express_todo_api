const app = require("./app");
const dotenv = require("dotenv").config();

const port = process.env.APPLICATION_PORT;

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});