import React from 'react';
import Episode_ActionType from '../constants/Episodes';


const INITIAL_STATE={
    loading:false,
    episodes: [],
    error:''
}

const episodes=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case Episode_ActionType.GET_ALL_REQUEST:
            return{
                ...state,
                loading:true
            }
        case Episode_ActionType.GET_ALL_SUCCESS:
            return{
                loading:true,
                episodes: action.result,
                error:''
            }
        case Episode_ActionType.GET_ALL_FAILURE:
            return{
                loading: false,
                episodes:[],
                error:action.result
            }
        default: return state;
    }

}

export default episodes;