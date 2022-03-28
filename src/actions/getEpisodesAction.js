import Axios from 'axios'
import {Episodes_ActionType as ActionType} from '../constants/Episodes'

export const fetchGetAllRequest=()=>(dispatch)=>{
    dispatch({
        type: ActionType.GET_ALL_REQUEST
    })
}

export const fetchGetAllSuccess=(Episodes)=>(dispatch)=>{
    dispatch({
        type: ActionType.GET_ALL_SUCCESS,
        result: Episodes
    })
}

export const fetchGetAllError=(error)=>(dispatch)=>{
    dispatch({
        type: ActionType.GET_ALL_FAILURE,
        result: error
    })
}

const fetchEpisodes=()=>{
    return (dispatch)=>{
        dispatch(fetchGetAllRequest());
        Axios.get(`https://rickandmortyapi.com/api/episode`)
             .then(response=>{
                 dispatch(fetchGetAllSuccess([response.data.results]))
             })
             .catch(error=>{
                 dispatch(fetchGetAllError('No se encontraron los episodios'))
             });
    }
}

export default fetchEpisodes;