const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: String,
    mobile: String,
    email: String,
    password: String
}, {
    versionKey: false
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel


//admin-->scheme
//admin-->login/register/
