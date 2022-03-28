import {combineReducers} from "redux";
import getEpisodes from "../reducers/Episodes"
import getCharacters from "../reducers/Characters"
import getFavorites from "./Favorites";

const rootReducers=combineReducers({
    getEpisodes, getCharacters, getFavorites
});

export default rootReducers;
