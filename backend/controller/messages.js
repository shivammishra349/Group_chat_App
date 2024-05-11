let Message = require('../model/message')

const addMessage = async (req,res)=>{
    try{
        const message = req.body.message;
        console.log(message)

        let response = Message.create({message});
        res.status(200).json({message:'chat saved'})
    }

    catch(err){
        res.status(500).json({message:'Internal server error'})
    }
    
}

module.exports={
    addMessage
}