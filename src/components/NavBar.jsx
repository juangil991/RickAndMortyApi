import React from 'react';
import { NavLink, useLocation,Router } from 'react-router-dom';
import Logo from '../img/Logo.png'


const NavBarComponent = () => {
    return (
        <nav className="navbar is-link" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            <NavLink to="/">
                <a className="navbar-item">
                    <img src={Logo} style={{
                        maxWidth: 200,
                        maxHeight: 200
                    }} />
                </a>
            </NavLink>
            </div>
            <div className="navbar-menu">
                <div className='navbar-brand'>
                    <h1 class="navbar-item is-6">
                        PEPINILLOS RICK
                    </h1>
                </div>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                   
                    <NavLink to="/episodes">
                    <a className="navbar-item has-text-white" style={{top:'25px'}}>EPISODES</a>
                    </NavLink>
                    
                    <a className="navbar-item">
                        FAVORITES
                    </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            SPECIES
                        </a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                HUMAN
                            </a>
                            <a className="navbar-item">
                                ALIEN
                            </a>
                            <a className="navbar-item">
                                UNKNOWN
                            </a>
                            <a className="navbar-item">
                                HUMANOID
                            </a>
                            <a className="navbar-item">
                                POOPYBUTHOLE
                            </a>
                            <a className="navbar-item">
                                MYTHOLOGICAL CREATURE
                            </a>
                            <a className="navbar-item">
                                ANIMAL
                            </a>
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