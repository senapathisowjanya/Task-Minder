import { GET_PROJECT, POST_TASK, TASK_DELETE, TASK_FALIURE, TASK_REQUEST, TASK_SUCCESS } from "./actionType"


const initState={
    isLoading:false,
    Error:false,
    task:[],
    project:[]
}

 export const reducer=(state=initState,{type,payload})=>{
         
    switch(type){
        case TASK_REQUEST:{
           return {...state,isLoading:true}
        }
        case  TASK_SUCCESS:{
         return {...state,isLoading:false,task:payload}
        }
       case  TASK_FALIURE:{
           return {...state,isError:true,isLoading:false}
       }
       case POST_TASK:{
        return {...state,isError:false,isLoading:false}
       }
       case TASK_DELETE:{
          return {...state,isError:false,isLoading:false}
       }
        case GET_PROJECT:{
          return {...state,isError:false,isLoading:false,project:payload}
        }
       default:{
         return state
       }
     }
 }