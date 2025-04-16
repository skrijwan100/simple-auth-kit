const {connectDB} = require("./lib/db")
const {register,login,getuser,updateuser}= require("./lib/auth")
module.exports = {
  connectDB,
  register,
  login,
  getuser,
  updateuser
};


