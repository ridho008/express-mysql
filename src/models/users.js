const dbPool = require("../config/database");

const getAllUser = () => {
  const sqlQuery = "SELECT * FROM users";
  return dbPool.execute(sqlQuery);
};

module.exports = {
  getAllUser,
};
