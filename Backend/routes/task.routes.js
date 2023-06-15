const express = require("express");
const { TaskModel } = require("../Model/task.model")
const taskRouter = express.Router();
const auth = require('../Middleware/auth');
const { ProjectModel } = require('../Model/project.model');


taskRouter.post('/create', auth, async (req, res) => {
  const { project_name } = req.body;
  console.log(project_name)
  try {
    const project = await ProjectModel.findOne({ project_name });
    // console.log('line 13', project)
    if (project) {
      const payload = { ...req.body, project_id: project._id }

      const task = new TaskModel(payload);
      //console.log('project exist', payload)
      await task.save();
      res.json({ msg: 'new task is added', task: payload })
    } else {
      const task = new TaskModel(req.body);
      //console.log(req.body)
      await task.save();
      res.json({ msg: 'new task is added', task: req.body })
    }


  } catch (error) {
    res.json({ error: error })
  }
});

// {
//   "task_name": "task1",
//   "assigned_to": "someone",
//   "project_name": "project1",
//   "description": "desc1"
//     }


taskRouter.get('/', auth, async (req, res) => {
  try {
    const tasks = await TaskModel.find({ userID: req.body.userID });
    res.json({ tasks })
  } catch (error) {
    res.json({ error })
  }
});

module.exports = { taskRouter };