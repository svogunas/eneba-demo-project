import React from 'react';
import classes from './Card.module.scss';

const Card = ({ title, children }) => {
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>{title}</h1>
            <div className={classes.children}>
                {children}
            </div>
        </div>
    );
};

export default Card;