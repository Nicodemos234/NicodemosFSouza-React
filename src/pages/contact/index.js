import React from 'react';
import { Helmet } from 'react-helmet';

import './styles.css';

const Contact = () => (
    <div className="contact-page fill-avaliable center center-elements">
        <Helmet>
            <title>Contact - Nicodemos</title>
        </Helmet>
        <div>
            <form>
                <label for="name">Name</label>
                <input name="name"></input>
                <label for="email">Email</label>
                <input name="email"></input>
                <label for="message">Message</label>
                <textarea name="message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
)

export default Contact;