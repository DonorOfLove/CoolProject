import {combineReducers} from "redux";
import {infReducer} from "./infReducer";
import {arrReducer} from "./arrReducer";

export const rootReducer = combineReducers({
    inf: infReducer,
    arr: arrReducer
})
