import {combineReducers} from "redux";
import getEpisodes from "../reducers/Episodes"
import getCharacters from "../reducers/Characters"

const rootReducers=combineReducers({
    getEpisodes, getCharacters
});

export default rootReducers;
