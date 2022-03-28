
import {Favorites_ActionType as ActionType} from '../constants/Favorites'


export const addFavorite=(image)=>(dispatch)=>{
    dispatch({
        type: ActionType.ADD_FAVORITE,
        result: image 
    })
}

export const removeFavorite=(image)=>(dispatch)=>{
    dispatch({
        type: ActionType.REMOVE_FAVORITE,
        result: image 
    })
}




export default {
    addFavorite,
    removeFavorite
}