import React from 'react';
import cx from 'classnames';
import styles from './ContactForm.css';

const ContactForm = (props) => {
    return ( 
        <form className='ContactForm' method="POST" action="https://formspree.io/williamrpelton@gmail.com">
            <input type="email" name="email" className='ContactForm__email' placeholder="your email"/>
            <textarea name="message" className='ContactForm__message'
                placeholder='Hello, my name is...'/>
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;