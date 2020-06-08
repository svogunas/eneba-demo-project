import React from 'react';
import classes from './NavItem.module.scss';

const NavItem = ({ title, path, items }) => {
    return (
        <div className={classes.item}>
            <a className={classes.title} href={path}>{title}</a>
            {items && (
                <div className={classes.dropDown}>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                <a href={item.path}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavItem;