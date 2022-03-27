import {combineReducers} from "redux";
import getEpisodes from "../reducers/Episodes"

const rootReducers=combineReducers({
    getEpisodes,
});

export default rootReducers;
