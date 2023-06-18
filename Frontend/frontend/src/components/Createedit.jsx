

import React, { useState } from 'react'

import {
    Popover,
    PopoverArrow,
    PopoverHeader,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    Text,
    Button,
    Input,
    Stack
    
  } from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getTask, updateTask } from '../Redux/taskReducer/action';

 

 export const Createedit = (task) => {
       const {_id}=task
    const initState={
        task_name:task.task_name,
        assigned_to:task.assigned_to,
        project_name:task.project_name,
        description: task.description
     }

    const dispatch=useDispatch()

    const [state,setState]=useState(initState)

    const handalChange=(e)=>{
      const {name,value}=e.target
         
      setState((prev)=>{
        return {...prev,[name]:value}
      })
        
    }

    const handalClick=()=>{
        
        dispatch(updateTask(state,_id)).then((res)=>{
             
            console.log(res)
          toast.success("New task has been updated", {
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
    <Text>Edit</Text>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Update your task</PopoverHeader>
    <PopoverBody>
    <Stack spacing={3}>
            <Input value={state.task_name} name="task_name" onChange={handalChange} placeholder="Task Name" size="sm" />
            <Input value={state.assigned_to} name="assigned_to" onChange={handalChange} placeholder="Task Assigned to" size="sm" />
            <Input value={state.project_name} name="project_name" onChange={handalChange} placeholder="Project name" size="sm" />
            <Input value={state.description} name="description"  onChange={handalChange} placeholder="Description" size="sm" />
               <Button onClick={handalClick} bgColor={"black"} color={"white"} fontSize={10} marginTop={3}>Add Task</Button>
          </Stack>
    </PopoverBody>
  </PopoverContent>
</Popover>
  )
}

