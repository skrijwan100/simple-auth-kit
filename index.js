const {connectDB} = require("./lib/db")
const {register}= require("./lib/auth")
connectDB('mongodb://localhost:27017/testauth')
const reg=async()=>{

    const res = await register({
        name: "Rijwan",
        email: "rijwan@example.com",
        address: "India",
        gender: "male",
        password: "pass123"
      });
      console.log(res);
  
}
reg();