import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as userReducer } from "./userReducer/reducer";
import thunk from "redux-thunk";


 
 const rootreducer=combineReducers({authReducer,userReducer})
 export const store =legacy_createStore( rootreducer ,applyMiddleware(thunk))

