const userModel = require("../models/users");

const getAllUser = async (req, res) => {
  try {
    const [data] = await userModel.getAllUser(); //Destructuring assignment
    res.json({ message: "GET users success", data: data });
  } catch (error) {
    res.status(500).json({ message: "Server error", serverMessage: error });
  }
};

const createNewUser = async (req, res) => {
  console.log(req.body);
  const { body } = req;

  if (!body.name || !body.email || !body.address) {
    return res.status(400).json({ message: "you sent wrong data", data: null }); // bila request body tidak sesuai
  }

  try {
    await userModel.createNewUser(body);
    res.status(201).json({ message: "create new users success", data: body });
  } catch (error) {
    res.status(500).json({ message: "Server error", serverMessage: error });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  console.log(`ID user ${id}`); // mendapatkan id
  const { body } = req;
  try {
    await userModel.updateUser(id, body);
    res.json({ message: "UPDATE user success", data: body });
  } catch (error) {
    res.status(500).json({ message: "Server error", serverMessage: error });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userModel.deleteUser(id);
    res.json({
      message: "DELETE user success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", serverMessage: error });
  }
};

module.exports = {
  getAllUser,
  createNewUser,
  updateUser,
  deleteUser,
};
