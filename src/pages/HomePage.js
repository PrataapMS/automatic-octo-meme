import { React, useState } from 'react';
import { Greeting } from '../Greeting';
import { ProtectedPage } from './ProtectedPage';


export const HomePage = () => {
    const [authed, toggleAuthed] = useState(false);
    return (
        <>
            <h1>The Home Page</h1>
            <Greeting name="Prataap" numberOfMessages={10} />
            <button onClick={() => toggleAuthed(authed ? false : true)}>{authed ? 'Logout': 'Login'}</button>
            <ProtectedPage authed={authed}/>
        </>
    )
};