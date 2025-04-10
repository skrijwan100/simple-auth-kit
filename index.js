const {connectDB} = require("./lib/db")
const {register,login}= require("./lib/auth")

module.exports = {
  connectDB,
  register,
  login,
};
