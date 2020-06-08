import React from 'react';
import classes from './Body.module.scss';
import MainBlock from '../MainBlock';
import FeatureBlock from '../FeatureBlock';

const Body = () => {
    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <MainBlock />
                <FeatureBlock />
            </div>
        </div>
    );
};

export default Body;