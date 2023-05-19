const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
// const port = 5000;
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to server",
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
