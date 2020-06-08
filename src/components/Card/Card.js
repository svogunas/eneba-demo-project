import React from 'react';
import classes from './Card.module.scss';

const Card = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Card;