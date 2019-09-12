import React from 'react';
import { userSelector } from 'react-redux';


const Footer = ({}) => {
    const authenticated = userSelector(state => state.authenticated)
    return (
        <div>
            Deltatre, all rights reserved. You are {authenticated ? "Signed in" : "not logged in"}.
        </div>
    )
}

export default Footer;