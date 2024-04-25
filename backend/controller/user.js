const User = require('../model/user')
const bcrypt = require('bcrypt')

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

const LoginUser=async (req,res,next)=>{
    let email = req.body.email;
    let password = req.body.password;

    let user = await User.findAll({
        where:{
            email:email,
        }
    })

    console.log(user)
    if(user.length>0){
        bcrypt.compare(password , user[0].password,(err,result)=>{
            if(err){
                res.status(500).json({message:'somthing went wrong'})
            }
            if(result===true){
                res.status(200).json({message:'user logged successfully'})
            }
            else{
                res.status(400).json({message:'email id or password is incorrect'})
            }
        })
    }
    else
    {
        res.status(404).json({message:'user does not exist'})
    }
}

module.exports={
    SignupUser,
    LoginUser
}