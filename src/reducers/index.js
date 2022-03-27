import {combineReducers} from "redux";
import episodes from "../reducers/Episodes"

const rootReducers=combineReducers({
    episodes,
});

export default rootReducers;
