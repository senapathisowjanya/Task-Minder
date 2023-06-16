import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionTypes";

const initState={
    isLoading: false,
    isError: false,
}

export const reducer = (state=initState,{type,payload}) => {
    // complete the reducer
  
        switch(type){
  
           case REGISTER_REQUEST:{
              return {...state,isLoading:true}
           }
           case REGISTER_SUCCESS:{
            return {...state,isLoading:false}
           }
          case REGISTER_FAILURE:{
              return {...state,isError:true,isLoading:false}
          }
          default:{
            return state
          }
        }
  };