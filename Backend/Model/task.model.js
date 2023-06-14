const mongoose = require("mongoose");

const taskSChema = mongoose.Schema({
    task_name: String,
    assigned_to: String,
    project_name: String,
    description: String,
    userName: String,
    userID: String,
    project_id: String
}, {
    versionKey: false
});

const TaskModel = mongoose.model("task", taskSChema);
module.exports = { TaskModel }