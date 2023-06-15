import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"


export const postLoginData=(email,password)=>(dispatch)=>{

    const loginData={
       email,
       password
    }
    dispatch({type:LOGIN_REQUEST})
    axios.post(`https://reqres.in/api/login`,loginData)
    .then((res)=>{
      console.log(res.data.token)
      dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
    })
    .catch((err)=>{
      console.log(err.message)
      dispatch({type:LOGIN_FAILURE})
    })
  }
  
  
 