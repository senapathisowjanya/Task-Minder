
import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS} from "./actionTypes"


const initState={
  
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
}



export const reducer = (state=initState,{type,payload}) => {
  // complete the reducer

      switch(type){

         case LOGIN_REQUEST:{
            return {...state,isLoading:true}
         }
         case LOGIN_SUCCESS:{
          return {...state,isLoading:false,isAuth:true,token:payload}
         }
        case LOGIN_FAILURE:{
            return {...state,isError:true,isLoading:false}
        }
        default:{
          return state
        }
      }
};