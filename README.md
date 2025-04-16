# simple-auth-kit 🔐
---
## ✨ Provide authentication with write less backend code 
---
A simple and reusable Node.js authentication package using **MongoDB**, **JWT**, and **bcrypt**. Just plug it into your frontend project and go!

---
## 🚀 Installation
```bash
npm install simple-auth-kit

```
## 🛠️ Usage

```js
const { connectDB, register, login } = require("simple-auth-kit");

// in your backend index.js page when you connect to your mongo you don't need to make db.js page just call this function use your mongo connection string ---->
connectDB("mongodb://localhost:27017/testauth");
```
### after run this if your mongo in connect you see in your tarminal console this-->
```bash
✅ MongoDB connected
```
```js
// Register a new user
const reg = async () => {
  const res = await register({
    name: "Rijwan",
    email: "rijwan@example.com",
    address: "India",
    gender: "male",
    password: "pass123"
  });
  console.log(res);
};
reg();

// Login the user
const loginuser = async () => {
  const res = await login({
    email: "rijwan@example.com",
    password: "pass123"
  });
  console.log(res);
};
loginuser();

//get the User 
const userdata= async()=>{
  const token= 'auth token that you store in local storage.'
      const res= await getuser(token)
      console.log(res)
}
userdata()

//update user data
const upuserdata=async()=>{
  const res= await updateuser({
    username:'rani day',
    address:'rupsona',
    gender:'female',
    authtoken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjdmODEwMjY2ZTFhM2MyNjYzOTM5ZTViIiwiaWF0IjoxNzQ0ODMzNjE5fQ.8mAQa16_Yq_ByebVI8MQyuTqN9BEk7qF0QvDTfKRMsQ'
  })
  console.log(res)
}
upuserdata();
//More sample code are comming 



