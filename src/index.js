require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const usersRoute = require("./routes/users");
const middlewareLogRequest = require("./middleware/logs");
const upload = require("./middleware/multer");

const app = express();

// middleware
app.use(middlewareLogRequest);
app.use(express.json()); // mengizinkan semua request body berupa json
app.use("/assets", express.static("public/images")); // membantu menampilkan gambar di API

app.use("/users", usersRoute);

app.use("/", (req, res, next) => {
  console.log({ message: `Welcome to my simple APIs` });
  next();
});

// multer -> mengupload gambar lewat postman
app.post("/upload", upload.single("photo"), (req, res) => {
  res.json({ message: "Uploaded success." });
});

app.use((err, req, res, next) => {
  res.json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server di jalankan di port ${PORT}`);
});
