import { React, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthenticatedMessage } from '../AuthenticatedMessage';

export const ProtectedPage = () => {
    const [authed, toggleAuthed] = useState(false);

    return (
        <>
            <button onClick={() => toggleAuthed(authed ? false : true)}>Toggle Login</button>
            {authed ?
                (
                    <AuthenticatedMessage isAuthed={authed} />
                ) : <Redirect to="/" />
            }
        </>
    )

}