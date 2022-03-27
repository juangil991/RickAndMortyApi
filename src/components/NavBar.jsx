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

            <div id="navbarBasicExample" class="navbar-end">
                <div class="navbar-start">
                    <a class="navbar-item">
                        PERSONAJES
                    </a>
                    <a class="navbar-item">
                        FAVORITOS
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            TEMPORADAS
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                About
                            </a>
                            <a class="navbar-item">
                                Jobs
                            </a>
                            <a class="navbar-item">
                                Contact
                            </a>
                            <hr class="navbar-divider"/>
                                <a class="navbar-item">
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