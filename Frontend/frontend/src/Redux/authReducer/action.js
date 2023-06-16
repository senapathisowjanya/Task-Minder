import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"
import { toast } from "react-toastify"


export const postLoginData=(email,password)=>(dispatch)=>{

    const loginData={
       email,
       password
    }
    dispatch({type:LOGIN_REQUEST})
   return axios.post(`https://reqres.in/api/login`,loginData)
    .then((res)=>{
        console.log(res.data.token) 
          if(res.data.token){
            
          toast.success("Login successfull!!", {
          position: "top-center",
          theme: "colored",
        });

          }
            
         localStorage.setItem("token",res.data.token)
      dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
    })
    .catch((err)=>{
      console.log(err.message)
      dispatch({type:LOGIN_FAILURE})
    })
  }

 
  
  
 