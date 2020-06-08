import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={classes.cover}>
            <div className={classes.footerWrapper}>
                <div className={classes.linkWrapper}>
                    <a href="/">Home</a>
                    <a href="/#">Projects</a>
                    <a href="/#">About Us</a>
                    <a href="/#">Testimonials</a>
                    <a href="/#">Contacts</a>
                </div>
                <p className={classes.text}>
                    Lacus augue efficitur mi, vitae iaculis lorem turpis 
                    in enim. Donec tristique dignissim massa, id dignissim 
                    tellus sodales nec. Ut molesti neque eu arcu ultrices 
                    rhoncus. Suspendisse potenti.Quisque a justo efficitur, 
                    sagittis felis at, maximus lacus. Sed id tempor mauris. 
                    Suspendisse eget ipsum nibh. Nam ornare sodales mi quis 
                    ornare. 
                </p>
            </div>
        </div>
    );
};

export default Footer;