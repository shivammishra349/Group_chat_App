const User = require('../model/user')
const bcrypt = require('bcrypt')

let AddUser =async (req,res,next)=>{
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
module.exports={
    AddUser
}