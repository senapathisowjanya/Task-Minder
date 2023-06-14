const mongoose=require('mongoose');

const logoutSchema=mongoose.Schema({
     token:String
})

const logoutModel=mongoose.model("logout",logoutSchema)

module.exports=logoutModel