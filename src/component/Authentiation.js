import React, { Component } from 'react';
import { userSelector, useDispatch } from 'react-redux';

function Authentiation(props) {
    const authenticated = true; //userSelector(state => state.authenticated);
    const dispatch = useDispatch();
    console.log("Authentiation");
    return (
        <div>
            <div>
                Enter your credentials to login to {props.company}:
            </div>
            <div>
                <button onClick={event => dispatch( { type: 'AUTH' })}>{authenticated ? "Sign out" : "Sign in"}</button>
            </div>
        </div>
    )
}

export default Authentiation;