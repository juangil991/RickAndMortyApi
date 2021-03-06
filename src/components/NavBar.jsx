import React from 'react'
import { NavLink, useLocation,Router } from 'react-router-dom';
import Logo from '../img/Logo.png'
import { useDispatch } from 'react-redux';
import fetchCharacters from '../actions/getCharacterAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


const NavBarComponent = () => {
    const [search, setSearch] = useState();
    const dispatch = useDispatch();
    return (
        <nav className="navbar is-link" role="navigation" aria-label="main navigation" style={{color:'yellow'}}>
            <div className="navbar-brand">
            <NavLink to="/">
                <a className="navbar-item"
                 onClick={()=>{
                    dispatch(fetchCharacters("https://rickandmortyapi.com/api/character") )
                }}>
                    <img src={Logo} style={{
                        maxWidth: 200,
                        maxHeight: 200
                    }} />
                </a>
            </NavLink>
            </div>
            <div className="navbar-menu" >

            </div>
            <div id='newFuente5' className="navbar-menu">
                <div className="navbar-start">
                   
                    <NavLink to="/episodes">
                    <h1 className="navbar-item has-text-white is-size-4" style={{top:'19px'}}>
                        EPISODES
                        </h1>
                    </NavLink>
                    <NavLink to="/favorite">
                    <a className="navbar-item has-text-white is-size-4" style={{top:'19px'}}>
                        FAVORITES
                    </a>
                    </NavLink>
                    <div className="navbar-item has-dropdown is-hoverable has-background-link is-size-4">
                        <a className="navbar-link">
                            SPECIES
                        </a>
                        <div className="navbar-dropdown has-background-grey-lighter">
                        <NavLink to="/">
                            <a className="navbar-item"
                            onClick={()=>{
                                dispatch(fetchCharacters("https://rickandmortyapi.com/api/character/?species=Human") )
                                }}>
                                HUMAN
                            </a>
                            <a className="navbar-item"
                            onClick={()=>{
                                dispatch(fetchCharacters("https://rickandmortyapi.com/api/character/?species=Alien") )
                            }}>
                                ALIEN
                            </a>
                            <a className="navbar-item"
                            onClick={()=>{
                                dispatch(fetchCharacters("https://rickandmortyapi.com/api/character/?species=Unknown") )
                            }}>
                                UNKNOWN
                            </a>
                            <a className="navbar-item"
                            onClick={()=>{
                                dispatch(fetchCharacters("https://rickandmortyapi.com/api/character/?species=Humanoid") )
                            }}>
                                HUMANOID
                            </a>
                            <a className="navbar-item"
                            onClick={()=>{
                                dispatch(fetchCharacters("https://rickandmortyapi.com/api/character/?species=Poopybutthole") )
                            }}>
                                POOPYBUTHOLE
                            </a>
                            <a className="navbar-item"
                            onClick={()=>{
                                dispatch(fetchCharacters("https://rickandmortyapi.com/api/character/?species=Mythological Creature") )
                            }}>
                                MYTHOLOGICAL CREATURE
                            </a>
                            <a className="navbar-item"
                            onClick={()=>{
                                dispatch(fetchCharacters("https://rickandmortyapi.com/api/character/?species=Animal") )
                            }}>
                                ANIMAL
                            </a>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
                    <div id="search" class="bd-search">
            <p class="control has-icons-left">
                <span class="algolia-autocomplete"
                    style={{position:'relative', display:'inline-block',direction:'ltr'}}><input id="algoliaSearch"
                        class="input is-rounded ds-input" type="text" placeholder="Search characters" autocomplete="off"
                        spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false"
                        aria-label="search input" aria-owns="algolia-autocomplete-listbox-0" dir="auto"
                        style={{position:'relative',verticalAlign:'buttom', top:'30px',right:'20px'}}
                        onChange={(e)=>{
                            setSearch(e.target.value)
                          
                        }}/>
                </span>
                <span class="icon is-small is-left">
                    <i class="fas fa-search"></i>
                </span>
            </p>
        </div>
        <NavLink to='/'>
        <button className='button is-link'style={{top:'30px',right:'20px'}}
       onClick={()=>{ dispatch(fetchCharacters(`https://rickandmortyapi.com/api/character/?name=${search}`) )}}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize:'2.1em'}}/>
        </button>
        </NavLink>
        </nav>


    );
}

export default NavBarComponent;