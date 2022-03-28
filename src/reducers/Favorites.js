
import Favorites_ActionType from '../constants/Favorites';


const INITIAL_STATE={
    favorites:[]
}

const getFavorites=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case Favorites_ActionType.ADD_FAVORITE:
            return{
                ...state,
                favorites:action.result
                
            }
        case Favorites_ActionType.REMOVE_FAVORITE:
            return{
                ...state,
                favorites:state.favorites.filter(e=>e!==action.result)
                
            }
        default: return state;
    }

}

export default getFavorites;