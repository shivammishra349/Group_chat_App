let Message = require('../model/message')

const addMessage = async (req,res)=>{
    try{
        const message = req.body.message;
        let userId = req.user.id
        console.log(userId)

        let response = Message.create({message,userId});
        res.status(200).json({message:response})
    }

    catch(err){
        res.status(500).json({message:'Internal server error'})
    }
    
}

const getMessage = async(req,res)=>{
    try{
        const message = await Message.findAll({where :{userId : req.user.id}})
        res.status(200).json({data:message})
    }
    catch(err){
        res.status(500).json({message:'somthing went wrong in get'})
    }
}

module.exports={
    addMessage,
    getMessage
}