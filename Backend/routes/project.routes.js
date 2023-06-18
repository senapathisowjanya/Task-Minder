const express = require("express");
const { ProjectModel } = require("../Model/project.model")
const projectRouter = express.Router();
const auth = require('../Middleware/auth');

projectRouter.post('/create',auth, async(req, res) => {
  try {
    const project = new ProjectModel(req.body);
    console.log(req.body)
    await project.save();
    res.json({ msg: 'new project is added', project: req.body })
  } catch (error) {
    res.json({ error: error })
  }
});

projectRouter.get('/', auth, async (req, res) => {
  try {
    const projects = await ProjectModel.find({ userID: req.body.userID });
    res.json({ projects })
  } catch (error) {
    res.json({ error })
  }
});


module.exports = {projectRouter}