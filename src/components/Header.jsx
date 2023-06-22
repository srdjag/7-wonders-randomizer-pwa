import React from 'react';
import logo from '../assets/img/logo.png'

function Header(props) {
    return(
        <header style={{textAlign: 'center'}}>
            <img className='header__image' src={logo} alt='logo'/>
        </header>
    );
};

export default Header;