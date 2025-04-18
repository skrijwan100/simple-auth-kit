const User = require("./Usermodle");
const jwt = require("jsonwebtoken");
const JWT_SERECT = 'fd*x$hT&nB#'
const { hashPassword, comparepassword, fecthuser } = require("./utils");

async function register({ name, email, address, gender, password }) {
    try {


        const chakeuser = await User.findOne({ email })
        console.log(email)

        if (chakeuser) {
            return { status: false, message: "User already exists" }
        }
        hashpas = await hashPassword(password)
        const newuser = await User({
            username: name,
            email: email,
            address: address,
            gender: gender,
            password: hashpas
        });
        await newuser.save()
        return { status: true, message: "User registered" };
    } catch (error) {
        console.log(error)
        return { status: false, message: "Some error happend" }
    }
}
async function login({ email, password }) {
    try {
        const finduser = await User.findOne({ email });
        if (!finduser) {
            return { status: false, message: "Invalid email or password" }
        }
        const chakepass = await comparepassword(password, finduser.password)
        if (!chakepass) {
            return { status: false, message: "Invalid email or password" }
        }
        const authtoken = jwt.sign({
            user: finduser._id
        }, JWT_SERECT)
        return { status: true, message: "Login Successful", token: authtoken }

    } catch (error) {
        console.log(error)
        return { status: false, message: "Some error happend" }
    }

}
async function getuser(authtoken) {
    const userdata = await fecthuser(authtoken)
    if (!userdata) {
        return { status: false, message: "Inavlid token" }
    }
    const userid = userdata.user
    const finduser = await User.findById(userid).select("-password")
    return finduser

}
async function updateuser({ username, email, address, gender, authtoken }) {
    const userdata = await fecthuser(authtoken)
    if (!userdata) {
        return { status: false, message: "Inavlid token" }
    }
    const userid = userdata.user
    const finduser = await User.findById(userid)
    const updateuser = {}
    if (username) {
        updateuser.username = username;
    }
    if (email) {
        updateuser.email = email;
    }
    if (address) {
        updateuser.address = address;
    }
    if (gender) {
        updateuser.gender = gender;
    }
    let newupdateuserdata= await User.findByIdAndUpdate(userid,{ $set: updateuser }, { new: true })
    return newupdateuserdata;
}
async function delteuser(authtoken) {
    const userdata = await fecthuser(authtoken)
    if (!userdata) {
        return { status: false, message: "Inavlid token" }
    }
    const userid = userdata.user
    await User.findByIdAndDelete(userid);
    return {status:true,message:"user delete"}
    
}
module.exports = { register, login, getuser, updateuser,delteuser };