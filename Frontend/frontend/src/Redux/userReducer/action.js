import axios from "axios"
import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionTypes"
import { toast } from "react-toastify"


export  const register=(userobj)=>(dispatch)=>{
      
      dispatch({type:REGISTER_REQUEST})
    axios.post(`http://localhost:8080/users/register`,userobj)
    .then((res)=>{
        // console.log(res)//
        console.log(res.data.msg)//
        if(res.data.one){
            toast.error( `${res.data.one}${res.data.two} ${res.data.three} ${res.data.four}`, {
                position: "top-center",
                theme: "colored",
              });

        }

           if(res.data.msg){
               toast.success(res.data.msg, {
                   position: "top-center",
                   theme: "colored",
                 });  

           }
        

        
        dispatch({type:REGISTER_SUCCESS})
    })
    .catch((err)=>{

        toast.error( err.message, {
            position: "top-center",
            theme: "colored",
          });
        dispatch({type:REGISTER_FAILURE})
      console.log(err)
    })
}