
import Favorites_ActionType from '../constants/Favorites';


const INITIAL_STATE={
    isFavorite:[],
    favorites:[]
}

const getFavorites=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case Favorites_ActionType.ADD_FAVORITE:
            return{
                
                favorites:[...state.favorites, action.result] ,
                isFavorite:[...state.isFavorite,action.isFavorite] 
            }
        case Favorites_ActionType.REMOVE_FAVORITE:
            return{
            
                favorites:state.favorites.filter((e)=>{
                    return e != action.result
                }), 
                isFavorite:state.isFavorite.filter((z)=>{
                    return z != action.isFavorite
                })    
            }
        default: return state;
    }

}

export default getFavorites;