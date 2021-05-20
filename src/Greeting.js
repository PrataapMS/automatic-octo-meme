import React from 'react';

export function Greeting({name, numberOfMessages}) {
    
    if (!name) {
        return null;
    }
    let isMorning = (new Date()).getHours() < 12;

    let message = isMorning 
    ? <h3>Good morning, {name}!</h3> 
    : <h3>Good Evening, {name}!</h3>;

    return (
        <>
        {message}
        {numberOfMessages > 0 ? <p>You have {numberOfMessages} new messages!</p>: null}
        </>
        );
}

 