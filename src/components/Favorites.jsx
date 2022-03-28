import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import fetchCharacters from '../actions/getCharacterAction'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';



const FavoritesComponent = (props) => {


    const favorites = props.name;
    return (<>
        <br />
        <div className='is-size-3 has-text-weight-semibold '>
            FAVORITES CHARACTERS:
        </div>
        <br />
        <div className="columns is-multiline is-mobile">
                    <div className="column is-one-quarter">
                        <div className='card'>
                            <div className="card-image">
                                <a>
                                    <figure className="image is-4by3">
                                        <img src="https://rickandmortyapi.com/api/character/avatar/40.jpeg" />
                                    </figure>
                                </a>
                            </div>
                        </div>
                    </div>
                )
        </div>
    </>);
}

const stateMapToPros = state => {
    return {
        name: state.getFavorites.name
    }
}

export default connect(stateMapToPros)(FavoritesComponent)