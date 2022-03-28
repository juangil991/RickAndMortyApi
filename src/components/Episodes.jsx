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
        <br />
        <div className='is-size-3 has-text-weight-semibold ' id='newFuente5' style={{color:'yellow'}}>
            EPISODES:
        </div>
        <br />
        <div className="columns is-multiline is-mobile" >
            {episode.map((e) => {
                return e.map((x,index) => {
                    return (
                        <div key={index} className="column is-one-quarter">
                            <div className='card'>
                                <header className="card-header has-background-info">
                                    <p className="card-header-title" >
                                        {"Episodio : " + x.id}
                                    </p>
                                </header>
                                <div className="card-content has-background-white-ter has-text-weight-medium has-text-grey">
                                    <div className="content">
                                        {"Name : " + x.name}
                                        <br />
                                        {"Episode : " + x.episode}
                                        <br />
                                        {"Air Date : " + x.air_date}
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