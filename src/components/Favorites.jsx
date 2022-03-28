import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import fetchCharacters from '../actions/getCharacterAction'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';



const FavoritesComponent = (props) => {



    const favorites = props.favorite;
    return (<>
        <br />
        <div className='is-size-3 has-text-weight-semibold' id='newFuente5' style={{color:'yellow'}}>
            FAVORITES CHARACTERS:
        </div>
        <br />
        <div className="columns is-multiline is-mobile">
            {favorites.map((e, index) => {
                return (
                    <div key={index} className="column is-one-quarter">
                        <div className='card'>
                            <div className="card-image">
                                <a>
                                    <figure className="image is-4by3">
                                        <img src={e.image} />
                                    </figure>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>);
}

const stateMapToPros = state => {
    return {
        favorite: state.getFavorites.favorites
    }
}

export default connect(stateMapToPros)(FavoritesComponent)