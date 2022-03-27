import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import fetchCharacters from '../actions/getCharacterAction'
import { useDispatch } from 'react-redux';



const CharactersComponent = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCharacters())
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
                                <header className="card-header has-background-info">
                                    <p className="card-header-title" >
                                        {x.name}
                                    </p>
                                </header>
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src={x.image} alt={x.name} />
                                    </figure>
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
        characters: state.getCharacters.response
    }
}

export default connect(stateMapToPros)(CharactersComponent)