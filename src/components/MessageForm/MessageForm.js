import React from 'react';
import classes from './MessageForm.module.scss';

const MessageForm = () => {
    return (
        <div className={classes.wrapper}>
            <form onSubmit={() => console.log('Submited')}>
                <label htmlFor='firstName'>First name</label>
                <input id='firstName' type='text' />
                <label htmlFor='lastName'>Last name</label>
                <input id='lastName' type='text' />
                <label htmlFor='msg'>Your message</label>
                <textarea id='msg' />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default MessageForm;