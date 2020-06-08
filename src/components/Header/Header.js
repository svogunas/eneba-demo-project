import React from 'react';
import defaultClasses from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import Navigation from '../Navigation';

const Header = () => {
    return (
        <div className={defaultClasses.cover}>
            <div className={defaultClasses.headerWrapper}>
                <a href='/'>
                    <img src={logo} alt="logo" />
                </a>
                <Navigation />
            </div>
        </div>
    );
};

export default Header;