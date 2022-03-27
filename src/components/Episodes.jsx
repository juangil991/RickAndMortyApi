import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import fetchEpisodes from '../actions/getEpisodesAction'
import { useDispatch } from 'react-redux';
import Logo from '../img/Logo.png'


const EpisodesComponent = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchEpisodes())
    }, []);

    const episodes = props.episodes;
    const episode = episodes.map(result => { return result.map(e => { return e }) })
    return (<>
        <br/>
        <div className='is-size-3 has-text-weight-semibold '>
            EPISODES:
        </div>
        <br/>
        <div className="columns is-multiline is-mobile">
            {episode.map((e) => {
                return e.map(x => {
                    return (
                        <div key={x.id} className="column is-one-quarter">
                            <div className='card'>
                                <header class="card-header has-background-info">
                                    <p class="card-header-title" >
                                        {"Episodio :"+x.id}
                                    </p>
                                </header>
                                <div class="card-content has-background-white-ter has-text-weight-medium">
                                    <div class="content">
                                        {"Name : "+ x.name}
                                        <br />
                                        {"Episode : " + x.episode}
                                        <br />
                                        {"Air Date : "+ x.air_date}
                                    </div>
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
        episodes: state.getEpisodes.response
    }
}

export default connect(stateMapToPros)(EpisodesComponent)