const User = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()


let SignupUser =async (req,res,next)=>{
    try{
        let name= req.body.name;
        let email= req.body.email;
        let number = req.body.number;
        let password = req.body.password;
        console.log(name)

        bcrypt.hash(password , 10 , async(err,hash)=>{

            console.log(err)
            await User.create({name,email,number,password:hash})
            res.status(200).json({message:'user added'})
        })
        
        
    }
     catch(err){
        res.status(500).json({message:'internal server error'})
     }
   

}

const generateAccessToken= (id,name)=>{
    return jwt.sign({userId:id ,name:name} , process.env.SECRET_KEY)
}


const LoginUser=async (req,res,next)=>{
    let email = req.body.email;
    let password = req.body.password;

    let user = await User.findAll({
        where:{
            email:email,
        }
    })

    // console.log(user)
    if(user.length>0){
        bcrypt.compare(password , user[0].password,(err,result)=>{
            if(err){
                res.status(500).json({message:'somthing went wrong'})
            }
            if(result===true){
                res.status(200).json({user:user,message:'user logged successfully' , token:generateAccessToken(user[0].id ,user[0].name)})
            }
            else{
                res.status(401).json({message:'user not authorized'})
            }
        })
    }
    else
    {
        res.status(404).json({message:'User not found'})
    }
}

module.exports={
    generateAccessToken,
    SignupUser,
    LoginUser
}