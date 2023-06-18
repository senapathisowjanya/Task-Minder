const jwt =require("jsonwebtoken")
const logoutModel = require("../Model/logout.schema")
require("dotenv").config()

const auth = async(req,res,next)=>{
    const token = req.headers.authorization?.split(' ')[1]

    try{
        const log=await logoutModel.findOne({token:token})
        if(!log){

        if(token){
            const decoded=jwt.verify(token,process.env.secret_key)
            console.log(decoded)
            if(decoded){
             req.body.userID=decoded.userID
             req.body.userName=decoded.userName
             next()
            }
        }else{
            res.json({msg:"Invalid token"})
        }
    }else{
        return res.json({msg:"Invalid token Please login Again"})
    }

    }catch(err){
       res.json({err:err.message})
    }

}

module.exports = auth