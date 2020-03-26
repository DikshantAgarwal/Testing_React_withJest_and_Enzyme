import React from 'react';
import './style.scss';
import Logo from './../../assets/icon.png';
const Header =props=>(
    <header>
        <div className="wrap">
            <div className="logo">
                 <img src={Logo} alt="logo"/>
            </div>
        </div>
    </header>
)

export default Header;