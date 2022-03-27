import React from 'react'
import fetchEpisodes from '../actions/getEpisodesAction'
import { useDispatch } from 'react-redux';


const EpisodesComponent = () => {
    const dispatch=useDispatch();
    const action=()=>{
        dispatch(fetchEpisodes());
    }
    return ( <>
    <div>
    <button
    onClick={()=>{
        dispatch(fetchEpisodes())
    }
    }
    >obtenerTodos</button>
    </div>
    </> );
}
 
export default EpisodesComponent;