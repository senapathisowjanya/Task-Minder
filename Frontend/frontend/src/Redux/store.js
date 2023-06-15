import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authReducer } from "./authReducer/reducer";
import thunk from "redux-thunk";


 
 const rootreducer=combineReducers({authReducer})
 export const store =legacy_createStore( rootreducer ,applyMiddleware(thunk))

