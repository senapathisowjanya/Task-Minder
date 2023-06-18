import React from 'react'
import { Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
   
     } from '@chakra-ui/react'

     import { IoEllipsisHorizontal } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { deleteTask, getTask } from '../Redux/taskReducer/action';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Createedit } from './Createedit';

export const Edittask = ({assigned_to,description,project_id,project_name,task_name,userID,_id}) => {

  const dispatch=useDispatch()

  const handalDelete=(project_name,_id)=>{
   
    
    dispatch(deleteTask(project_name,_id))
    .then((res)=>{
      
      toast.success("Task has been deleted", {
        position: "top-center",
        theme: "colored",
      })

        dispatch(getTask())
    }).catch((err)=>{
      toast.error(err.message, {
        position: "top-center",
        theme: "colored",
      })
    })

  }
  
   const task={
    description,
    _id,
    task_name,
    assigned_to,
    task_name,
    userID
   }

  return (
  
    <Popover >
    <PopoverTrigger>
      <span ><IoEllipsisHorizontal/></span>
    </PopoverTrigger>
    <PopoverContent style={{width:"100%"}}>
      <PopoverArrow />
      {/* <PopoverCloseButton /> */}
      <PopoverBody>
        <h2><Createedit {...task} /></h2>
        <button onClick={()=> handalDelete(project_name , _id)} style={{color:"red"}}>Delete</button>
      </PopoverBody>
    </PopoverContent>

      <ToastContainer/>
  </Popover>
 
  )
}



