const userModel = require("../models/users");

const getAllUser = async (req, res) => {
  try {
    const [data] = await userModel.getAllUser(); //Destructuring assignment
    res.json({ message: "GET users success", data: data });
  } catch (error) {
    res.status(500).json({ message: "Server error", serverMessage: error });
  }
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({ message: "create new users success", data: req.body });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  console.log(`ID user ${id}`); // mendapatkan id
  res.json({ message: "UPDATE user success", data: req.body });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "DELETE user success",
    data: { id: id, name: "Surya", email: "surya@gmail.com" },
  });
};

module.exports = {
  getAllUser,
  createNewUser,
  updateUser,
  deleteUser,
};
