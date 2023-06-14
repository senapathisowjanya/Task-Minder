const jwt =require("jsonwebtoken")
require("dotenv").config()

const auth=(req,res,next)=>{
    const {token}=req.cookies
    console.log(token)
    try{
        if(token){
            const decoded=jwt.verify(token,process.env.secret_key)
            if(decoded){
             req.body.userID=decoded.userID
             req.body.name=decoded.name
             next()
            }
        }else{
            res.json({msg:"Invalid token"})
        }

    }catch(err){
       res.json({err:err.message})
    }
}

module.exports=auth