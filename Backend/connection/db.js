const mongoose = require('mongoose');

require("dotenv").config();

const db_connect=mongoose.connect(process.env.mongoURL)

module.exports=db_connect