const express = require("express");
const { TaskModel } = require("../Model/task.model")
const taskRouter = express.Router();
const auth = require('../Middleware/auth');
const { ProjectModel } = require('../Model/project.model');


taskRouter.post('/create',auth, async (req, res) => {
  const { project_name, userName, userID } = req.body;
  try {
    let project = await ProjectModel.findOne({ project_name });
    if (!project) {
      project = new ProjectModel({ project_name, userName, userID });
      await project.save();
    }

    const payload = { ...req.body, project_id: project._id };
    const task = new TaskModel(payload);
    await task.save();

    res.json({ msg: 'New task is added', task: payload });
  } catch (error) {
    res.json({ error: error });
  }
});

// {
//   "task_name": "task1",
//   "assigned_to": "someone",
//   "project_name": "project1",
//   "description": "desc1"
//     }


// taskRouter.get('/', auth, async (req, res) => {
//   const {project} = req.query;
//   try {
//     let tasks;
//     if(project){
//       tasks = await TaskModel.find({ userID: req.body.userID, project_id: project._id });
//     } else {
//       tasks = await TaskModel.find({ userID: req.body.userID });
//     }
//     res.json({ tasks })
//   } catch (error) {
//     res.json({ error })
//   }
// });

taskRouter.get('/', auth, async (req, res) => {
  const { project } = req.query;
  const { userID } = req.body;
  console.log("line 53")
  try {
    let tasks;
    if (project) {
      tasks = await TaskModel.find({ userID, project_name: project});
    } else {
      tasks = await TaskModel.find({ userID });
    }
    res.json({ tasks });
  } catch (error) {
    res.json({ error });
  }
});


// taskRouter.patch('/update/:taskID', auth, async (req, res) => {
//   //userid is user doc === userid in task doc
//   const userIDinUserDoc = req.body.userID
//   const { taskID } = req.params;
//   const { project_name } = req.body;
//   try {
//     const project = await ProjectModel.findOne({ project_name });
//     const projectIDinProjectDoc  = project._id
//     const task = await TaskModel.findOne({ _id: taskID })
//     const userIDinTaskDoc = task.userID;
//     const projectIDinTaskDoc = task.project_id;
//      //console.log("line 64", projectIDinTaskDoc)
 
//       if (userIDinUserDoc === userIDinTaskDoc && projectIDinProjectDoc == projectIDinTaskDoc) {
//         await TaskModel.findByIdAndUpdate({ _id: taskID }, req.body);
//         res.json({ msg: `task is updated` })
//       } else {
//         res.json({ msg: "Not Authorized!" })
//       }
    
   
//   } catch (error) {
//     res.json({ error })
//   }
// });

taskRouter.patch('/update/:taskID', auth, async (req, res) => {
  const { taskID } = req.params;
  const { project_name, userID } = req.body;
     console.log(req.body)
  try {
    const project = await ProjectModel.findOne({ project_name });
    const task = await TaskModel.findOne({ _id: taskID });

    if (!project || !task) {
      return res.json({ msg: "Task or project not found" });
    }

    if (project._id.toString() !== task.project_id.toString() || userID !== task.userID) {
      return res.json({ msg: "Not authorized to update this task" });
    }

    await TaskModel.findByIdAndUpdate(taskID, req.body);
    res.json({ msg: "Task is updated" });
  } catch (error) {
    res.json({ error });
  }
});

taskRouter.delete('/delete/:taskID', auth, async (req, res) => {
  const { taskID } = req.params;
  const { project_name, userID } = req.body;
  try {
    const project = await ProjectModel.findOne({ project_name });
    const task = await TaskModel.findOne({ _id: taskID });

    if (!project || !task) {
      return res.json({ msg: "Task or project not found" });
    }

    if (project._id.toString() !== task.project_id.toString() || userID !== task.userID) {
      return res.json({ msg: "Not authorized to delete this task" });
    }

    await TaskModel.findByIdAndDelete(taskID);
    res.json({ msg: "Task has been deleted" });
  } catch (error) {
    res.json({ error });
  }
});

module.exports = { taskRouter };