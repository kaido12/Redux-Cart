import { combineReducers } from "redux";
import prodReducer from "./productreducer";

const rootReducers = combineReducers({
    cart:prodReducer
})

export  default rootReducers