
import Characters_ActionType from '../constants/Characters';


const INITIAL_STATE={
    loading:false, 
    response: [[[]]],
    error:'',
    url:"https://rickandmortyapi.com/api/character"
}

const getCharacters=(state= INITIAL_STATE,action)=>{
    switch(action.type){
        case Characters_ActionType.GET_CHARACTERS_REQUEST:
            return{
                ...state,
                loading:true,
                url:action.result
                
            }
        case Characters_ActionType.GET_CHARACTERS_SUCCESS:
            return{
                ...state,
                loading:true,
                response: action.result,
                error:'',
                requesting:true
            }
        case Characters_ActionType.GET_CHARACTERS_FAILURE:
            return{
                loading: false,
                response:[],
                error:action.result,
                requesting:false
            }
        default: return state;
    }

}

export default getCharacters;