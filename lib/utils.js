const bcrypt = require("bcrypt")

async function hashPassword(password) {
    console.log(password)
    const salt= await bcrypt.genSalt(12)
    const hashPassword= await bcrypt.hash(password,salt)
    return hashPassword;    
}
async function comparepassword(raw,haspass) {
    const chakepass= await bcrypt.compare(raw,haspass)
    if(chakepass){
        return true
    }
    return false
}
module.exports={hashPassword,comparepassword}