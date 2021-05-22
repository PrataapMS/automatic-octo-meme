import { React } from 'react';

export const AuthenticatedMessage = ({ isAuthed }) => {
    if (!isAuthed)
        console.log("Hello there! You are trying to access a authenticated page!");
    return (
        isAuthed ?
            (
                <h1>Only authenticated users should be able to see this!</h1>
            )
            : null
    );
}