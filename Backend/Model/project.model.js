const mongoose = require("mongoose");

const projectSChema = mongoose.Schema({
    project_name: String,
    userName: String,
    userID: String
}, {
    versionKey: false
});

const ProjectModel = mongoose.model("project", projectSChema);
module.exports = { ProjectModel }