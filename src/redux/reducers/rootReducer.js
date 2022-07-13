import {combineReducers} from "redux";
import {searchReducer} from "./searchReducer";
import {isLoadedreducer} from "./isLoadedReducer";

export const rootReducer = combineReducers({
    search: searchReducer,
    loaded: isLoadedreducer
})
