import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import fetchCharacters from '../actions/getCharacterAction'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addFavorite, removeFavorite } from '../actions/getFavoritesAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'



const CharactersComponent = (props) => {
    const inFavorite=props.isFavorite;
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(inFavorite)
        dispatch(fetchCharacters(props.url))
    }, []);

    const characters = props.characters;
    const character = characters.map(result => { return result.map(e => { return e }) })
    return (<>
        <br />
        <div className='is-size-3 has-text-weight-semibold ' id='newFuente5' style={{color:'yellow'}}>
            CHARACTERS:
        </div>
        <br />
        <div className="columns is-multiline is-mobile">
            {character.map((e) => {
                return e.map((x, index) => {
                    return (
                        <div key={index} className="column is-one-quarter" id='newFuente1'>
                            <div className='card'>
                                <header className="card-header has-background-info" >
                                    <p className="card-header-title" >
                                        {x.name}
                                    </p> 
                                    {!inFavorite.includes(x.id)&&<button class="button is-info" style={{top:'0em',color:'blueviolet'}}
                                          onClick={()=>{
                                        
                                              dispatch(addFavorite(x));
                                          }}>
                                            <FontAwesomeIcon icon={faHeart} style={{fontSize:'2.1em'}}/>
                                        </button>}
                                       
                                       {inFavorite.includes(x.id)&&<button class="button is-info" style={{top:'0em',color:'aquamarine'}}
                                          onClick={()=>{
                                          
                                              dispatch(removeFavorite(x));
                                          }}>
                                            <FontAwesomeIcon icon={faHeart} style={{fontSize:'2.1em'}}/>
                                        </button>}
                                                    
                                </header>
                                <div className="card-image">
                                    <a>
                                        <NavLink to='/episodes'>
                                            <figure className="image is-4by3">
                                                <img src={x.image} alt={x.name} />
                                            </figure>
                                        </NavLink>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })
            })}
        </div>
    </>);
}

const stateMapToPros = state => {
    return {
        characters: state.getCharacters.response,
        url: state.getCharacters.url,
        favorite: state.getFavorites.favorites,
        isFavorite:state.getFavorites.isFavorite
    }
}

const mapDispatchToProps = () => ({
    addFavorite, removeFavorite
})

export default connect(stateMapToPros, mapDispatchToProps)(CharactersComponent)