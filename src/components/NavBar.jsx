import React from 'react';
import Logo from '../img/Logo.png'


const NavBarComponent = () => {
    return (
        <nav className="navbar is-link" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src={Logo} style={{
                        maxWidth: 200,
                        maxHeight: 200
                    }} />
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-end">
                <div className="navbar-start">
                    <a className="navbar-item">
                        EPISODES
                    </a>
                    <a className="navbar-item">
                        FAVORITES
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            TEMPORADAS
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                About
                            </a>
                            <a className="navbar-item">
                                Jobs
                            </a>
                            <a className="navbar-item">
                                Contact
                            </a>
                            <hr className="navbar-divider"/>
                                <a className="navbar-item">
                                    Report an issue
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>


    );
}

export default NavBarComponent;