import { AuthenticatedMessage } from '../AuthenticatedMessage';
import { NotAuthenticatedRedirect } from '../NotAuthenticatedRedirect';

export const ProtectedPage = ({ authed }) => {
    return (
        <>
            {authed ?
                (
                    <AuthenticatedMessage isAuthed={authed} />
                ) : <NotAuthenticatedRedirect isAuthed={authed} />
            }
        </>
    )
}