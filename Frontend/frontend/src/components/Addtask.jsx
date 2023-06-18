import {
  Button,
  Popover,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask, getTask } from "../Redux/taskReducer/action";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const initState={
   task_name:"",
   assigned_to:"",
  project_name:"",
  description: ""
}

export const Addtask = () => {

    const dispatch=useDispatch()

    const [state,setState]=useState(initState)

    const handalChange=(e)=>{
      const {name,value}=e.target
         
      setState((prev)=>{
        return {...prev,[name]:value}
      })
        
    }


     const handalClick=()=>{
        
        dispatch(createTask(state)).then((res)=>{

          toast.success("New task has been created", {
            position: "top-center",
            theme: "colored",
          })
             dispatch(getTask())

        })
        .catch((err)=>{
          toast.error(err.message, {
            position: "top-center",
            theme: "colored",
          })
        })

        setState(initState)
     }

  return (
    <Popover>
      <PopoverTrigger>
        <Button fontSize={12}>Click here to add a task</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Add Task</PopoverHeader>
        <PopoverBody>
          <Stack spacing={3}>
            <Input value={state.task_name} name="task_name" onChange={handalChange} placeholder="Task Name" size="sm" />
            <Input value={state.assigned_to} name="assigned_to" onChange={handalChange} placeholder="Task Assigned to" size="sm" />
            <Input value={state.project_name} name="project_name" onChange={handalChange} placeholder="Project name" size="sm" />
            <Input value={state.description} name="description"  onChange={handalChange} placeholder="Description" size="sm" />
          </Stack>
               <Button onClick={handalClick} bgColor={"black"} color={"white"} fontSize={10} marginTop={3}>Add Task</Button>
        </PopoverBody>
      </PopoverContent>
      <ToastContainer/>
    </Popover>
  );
};

// task_name: String,
// assigned_to: String,
// project_name: String,
// description: String,
