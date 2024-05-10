const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const timeStamp = new Date().getTime();
    const originalName = file.originalname;
    //  const extension = path.extname(file.originalname);
    cb(null, `${timeStamp}-${originalName}`);
  },
});

const upload = new multer({
  storage: storage,
  limits: { fileSize: 3 * 1000 * 1000 }, // memberikan limit upload sebesar 3MB
});

module.exports = upload;
