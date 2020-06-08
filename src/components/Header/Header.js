import React from 'react';
import defaultClasses from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import Navigation from '../Navigation';
import MobileNavigation from '../Navigation/Mobile';

const Header = () => {
    return (
        <div className={defaultClasses.cover}>
            <div className={defaultClasses.wrapper}>
                <a href='/'>
                    <img src={logo} alt="logo" />
                </a>
                <Navigation />
                <MobileNavigation />
            </div>
        </div>
    );
};

export default Header;