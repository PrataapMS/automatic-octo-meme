import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const NotAuthenticatedRedirect = ({ isAuthed }) => {
    const history = useHistory();
    useEffect(() => {
        if (!isAuthed) {
            console.log("Not authed!")
            history.push("/");
        }
    });

    return (
        <h3> You are not authenticated, kindly login to see this section!</h3>
    );
}