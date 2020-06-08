import React, { useState } from 'react';
import classes from './NavItem.module.scss';

const NavItem = ({ title, path, items, onClose }) => {
    const [open, setOpen] = useState(false);

    const handleOpenDropDown = () => {
        setOpen(!open);

        if(!items) {
            onClose();
        } 
    };

    return (
        <div className={classes.item}>
            <a className={classes.title} href={path} onClick={handleOpenDropDown}>{title}</a>
            {items && (
                <div className={classes.dropDown} style={{ maxHeight: open ? 250 : undefined }}>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                <a href={item.path} onClick={onClose}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavItem;