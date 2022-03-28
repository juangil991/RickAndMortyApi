import Axios from 'axios'
import {Characters_ActionType as ActionType} from '../constants/Characters'


export const fetchGetCharacterRequest=(url)=>async(dispatch)=>{
    dispatch({
        type: ActionType.GET_CHARACTERS_REQUEST,
        result: url
    })
}

export const fetchGetCharacterSuccess=(Characters)=>async(dispatch)=>{
    dispatch({
        type: ActionType.GET_CHARACTERS_SUCCESS,
        result: Characters
    })
}

export const fetchGetCharacterError=(error)=>async(dispatch)=>{
    dispatch({
        type: ActionType.GET_CHARACTERS_FAILURE,
        result:error
    })
}

const fetchCharacters=(url)=>{
    return (dispatch)=>{
        dispatch(fetchGetCharacterRequest(url));
        Axios.get(url)
             .then(response=>{
                 dispatch(fetchGetCharacterSuccess([response.data.results]))
             })
             .catch(error=>{
                 dispatch(fetchGetCharacterError('No se pudo aceder a la lista de imagenes'))
             });
    }
}

export default fetchCharacters;