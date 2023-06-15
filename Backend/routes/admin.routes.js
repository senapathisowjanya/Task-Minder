const express = require("express")
const userModel = require("../Model/user.Schema")
const {TaskModel} = require("../Model/task.model")
const auth = require("../Middleware/auth")

const addMinRouter = express.Router()

addMinRouter.get("/",  async (req,res)=>{
    try {
        const user =  await userModel.find()
        res.json(user)
    } catch (err) {
        res.json({err:err})        
    }
})
addMinRouter.patch("/updata/:upID", async (req,res)=>{
    const {upID} = req.params
    const iDinBody = req.body._id
    try {
        const user = await userModel.findOne({_id:upID})
        if(iDinBody === user.id){
            const user =  await userModel.findByIdAndUpdate({_id:upID},req.body)
            res.status(200).json(user)
        }else {
            const user =  await userModel.findOne({_id:upID})
            res.status(200).json({msg: `user Id is ${user._id}`})
        }        
    } catch (err) {
        res.status(400).json({err:err.message})
    }
})
addMinRouter.delete("/delete/:upID", async(req,res)=>{
    const {upID} = req.params
    try {
        await userModel.findByIdAndDelete({_id:upID})
        res.status(200).json({msg: `User has been delete`})
    } catch (err) {
        res.status(400).json({err:err.message})
    }
})

addMinRouter.get("/user/task", async (req, res)=>{
    try {
        const task =  await TaskModel.find()
        res.json(task)
    } catch (err) {
        res.json({err:err})
    }
})

addMinRouter.delete("/user/delete/:tkID", async (req, res)=>{
    const userIDinUserDoc = req.body.userID
    const {tkID} = req.params
    try {
         await TaskModel.findByIdAndDelete({_id:tkID})
         res.json({msg: `successfully delete task`})
    } catch (err) {
        res.json({err:err.message})
    }
})







module.exports={
    addMinRouter
}