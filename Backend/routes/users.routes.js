const express = require('express');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const userModel = require('../Model/user.Schema');
const logoutModel = require('../Model/logout.schema');
const auth = require('../Middleware/auth');
require("dotenv").config();
const userRouter = express.Router();


userRouter.post("/register", async (req, res) => {
    const { userName, email, mobile, password } = req.body
    const regularexpression = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/

    const result = regularexpression.test(req.body.password)
    //    console.log(result)
    if (result) {
        try {
            const user = await userModel.findOne({ email: email })
            if (!user) {
                bcrypt.hash(password, 3, async (err, hash) => {
                    const newUser = new userModel({ userName, email, mobile, password: hash })
                    await newUser.save()
                    return res.json({ msg: "Registration successful", newUser })

                });
            }
            else {
                return res.json({ msg: "User already exist, please login" })
            }

        } catch (err) {
            res.json({ msg: err.message })
        }
    }
    else {
        let obj = {

            "one": "Password should contain at least one Uppercharacter",
            "two": "Password should contain at least one Number",
            "three": "Password should contain at least one Symbol",
            "four": "Password should contain length at least 8 Character"
        }
        res.json(obj)
        //return res.end()
        // res.write({msg:"Password should contain at least one Number"})
        // res.write({msg:"Password should contain at least one Symbol"})
        // res.write({msg:"Password should contain length at least 8 Character"})

    }
})

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email: email })
    try {
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ userID: user._id, userName: user.userName }, process.env.secret_key, { expiresIn: "7 days" });
                    res.cookie("token", token, { maxAge: 1000 * 60 * 4 })

                    res.json({ msg: "Login successful", token,user })
                } else {
                    res.json({ msg: "Login failed!!" })
                }

            });
        } else {
            res.json({ msg: "Please Register first..." })
        }

    } catch (err) {
        res.json({ msg: err.message })
    }
})

userRouter.get("/logout", async (req, res) => {
    const { token } = req.cookies
    try {
        const logout = new logoutModel({ token })
        await logout.save()
        res.json({ msg: "Logout successfully" })
    } catch (err) {
        res.json({ msg: err.message })
    }
})

// userRouter.get("/", auth, (req, res) => {
//     res.json({ msg: "hello user" })
// })

module.exports = userRouter