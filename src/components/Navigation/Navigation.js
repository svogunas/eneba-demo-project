import React from 'react';
import NavItem from '../NavItem';
import classes from './Navigation.module.scss';

const projects = [
    {
        name: 'Link 1',
        path: '/#'
    },
    {
        name: 'Link 2',
        path: '/#'
    },
    {
        name: 'Link 3',
        path: '/#'
    },
    {
        name: 'Link 4',
        path: '/#'
    },
    {
        name: 'Link 5',
        path: '/#'
    }
];

const Navigation = () => {
    return(
        <div className={classes.wrapper}>
            <NavItem 
                title='Projects'
                path='/#'
                items={projects}
            />
            <NavItem title='About Us' path='/#' />
            <NavItem title='Testimonials' path='/#' />
            <NavItem title='Contacts' path='/#' />
        </div>
    );
};

export default Navigation;