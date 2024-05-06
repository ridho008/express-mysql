require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const usersRoute = require("./routes/users");
const middlewareLogRequest = require("./middleware/logs");

const app = express();

// middleware
app.use(middlewareLogRequest);
app.use(express.json()); // mengizinkan semua request body berupa json

app.use("/users", usersRoute);

app.use("/", (req, res, next) => {
  console.log({ message: `Welcome to my simple APIs` });
  next();
});

app.listen(PORT, () => {
  console.log(`Server di jalankan di port ${PORT}`);
});
