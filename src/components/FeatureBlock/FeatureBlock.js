import React from 'react';
import classes from './FeatureBlock.module.scss';

const FeatureBlock = () => {
    return (
        <div className={classes.wrapper}>
            <p>
                Quisque a justo efficitur, sagittis felis at, maximus 
                lacus. Sed id tempor mauris. Suspe disse eget ipsum 
                nibh. Nam ornare sodales mi quis ornare. Ut at accumsan 
                felis. Nullade facilisi retro. 
            </p>
            <p>
                Suspendisse eu orci elit. In id commodo mauris. Fusce 
                nec imperdiet nibh. Integer a erat sceleri sque, 
                pellentesque leo a, posuere justo. Etiam maximus, nibh 
                a luctus sagittis, nibh elit tempus est, non dapibus 
                nunc.
            </p>
            <p>
                Sed arcu purus, hendrerit sed rutrum vel, faucibus sed 
                lectus. Cras consectetur dolor et risus commodo tempus. 
                Nullam porta eros eros, sit amet consectetur justo 
                varius vel. Aenean gravida rutrum tellus, non lacerat.
            </p>
        </div>
    );
};

export default FeatureBlock;