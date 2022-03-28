import React from 'react';
import { NavLink, useLocation,Router } from 'react-router-dom';
import Logo from '../img/Logo.png'
import { useDispatch } from 'react-redux';
import fetchCharacters from '../actions/getCharacterAction'


const NavBarComponent = () => {
    const dispatch = useDispatch();
    return (
        <nav className="navbar is-link" role="navigation" aria-label="main navigation">
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
            <div className="navbar-menu">
                <div className='navbar-brand'>
                    <h1 class="navbar-item is-size-2">
                        PICKLE RICK
                    </h1>
                </div>
            </div>
            <div className="navbar-menu">
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
                    <div className="navbar-item has-dropdown is-hoverable is-size-4">
                        <a className="navbar-link">
                            SPECIES
                        </a>
                        <div className="navbar-dropdown">
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
                        style={{position:'relative',verticalAlign:'buttom', top:'30px',right:'20px'}}/>
                </span>
                <span class="icon is-small is-left">
                    <i class="fas fa-search"></i>
                </span>
            </p>
        </div>
        </nav>


    );
}

export default NavBarComponent;