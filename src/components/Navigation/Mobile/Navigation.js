import React, { Fragment, useState } from 'react';
import classes from './Navigation.module.scss';
import NavItem from '../../NavItem';

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
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        console.log('helo');
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Fragment>
            <button className={classes.button} onClick={handleOpen}>
                <div className={classes.line} />
                <div className={classes.line} />
                <div className={classes.line} />
            </button>
            <div className={classes.menuWrapper} style={{ maxWidth: open ? 280 : 0 }}>
                <div className={classes.menuHead}>
                    <button onClick={handleClose}>X</button>
                </div>
                <div className={classes.menuItems}>
                    <NavItem 
                        title='Projects'
                        path='/#'
                        items={projects}
                        onClose={handleClose}
                    />
                    <NavItem title='About Us' path='/#' onClose={handleClose} />
                    <NavItem title='Testimonials' path='/#' onClose={handleClose} />
                    <NavItem title='Contacts' path='/#' onClose={handleClose} />
                </div>
            </div>
        </Fragment>
    );
};

export default Navigation;