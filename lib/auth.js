const User= require("./Usermodle");
const {hashPassword}=require("./utils");

async function register({name,email,address,gender,password}) {
    try {
        
  
    const chakeuser= await User.findOne({email})
    console.log(email)
 
    if(chakeuser){
        return {status:false,message:"User already exists"}
    }
    hashpas= await hashPassword(password)
    const newuser= await User({
        username:name,
        email:email,
        address:address,
        gender:gender,
        password:hashpas
    });
    await newuser.save()
    return {status:true,message:"User registered"};
} catch (error) {
        console.log(error)
        return {status:false,message:"Some error happend"}
}
}

module.exports={register};