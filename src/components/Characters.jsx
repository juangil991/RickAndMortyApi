import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import fetchCharacters from '../actions/getCharacterAction'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addFavorite } from '../actions/getFavoritesAction';



const CharactersComponent = (props) => {

    const dispatch = useDispatch();
    useEffect(() => { 
        console.log(props.url)
        dispatch(fetchCharacters(props.url))
    }, []);

    const characters = props.characters;
    const character = characters.map(result => { return result.map(e => { return e }) })
    return (<>
        <br />
        <div className='is-size-3 has-text-weight-semibold '>
            CHARACTERS:
        </div>
        <br />
        <div className="columns is-multiline is-mobile">
            {character.map((e) => {
                return e.map((x, index) => {
                    return (
                        <div key={index} className="column is-one-quarter">
                            <div className='card'>
                                <header className="card-header has-background-info" >
                                    <p className="card-header-title" >
                                        {x.name}
                                    </p>
                                    <button
                                    onClick={()=>{
                                        dispatch(props.addFavorite(x.name)) 
                                      }}
                                    >Favorito</button>
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
        url:state.getCharacters.url
    }
}

const mapDispatchToProps= () => ({
    addFavorite,
  })

export default connect(stateMapToPros,mapDispatchToProps)(CharactersComponent)