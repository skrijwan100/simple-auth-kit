const bcrypt = require("bcrypt")

async function hashPassword(password) {
    console.log(password)
    const salt= await bcrypt.genSalt(12)
    const hashPassword= await bcrypt.hash(password,salt)
    return hashPassword;    
}
module.exports={hashPassword}