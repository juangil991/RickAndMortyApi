import React from 'react';
import Episode_ActionType from '../constants/Episodes';


const INITIAL_STATE={
    loading:false, 
    response: [[[]]],
    error:'',
    requesting:false
}

const getEpisodes=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case Episode_ActionType.GET_ALL_REQUEST:
            return{
                ...state,
                loading:true,
                requesting:false
            }
        case Episode_ActionType.GET_ALL_SUCCESS:
            return{
                loading:true,
                response: action.result,
                error:'',
                requesting:true
            }
        case Episode_ActionType.GET_ALL_FAILURE:
            return{
                loading: false,
                response:[],
                error:action.result,
                requesting:false
            }
        default: return state;
    }

}

export default getEpisodes;