const {connectDB} = require("./lib/db")
const {register,login,getuser,updateuser,delteuser}= require("./lib/auth")
module.exports = {
  connectDB,
  register,
  login,
  getuser,
  updateuser,
  delteuser
};



