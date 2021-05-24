import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import {useUserData} from '../useUserData';

// commented below code which was used for container pattern for loading user data
// export const UserProfilePage = ({ user }) => {
export const UserProfilePage = () => {
    const theme = useContext(ThemeContext);
    const user = useUserData();
    return (
        <div style={{
            backgroundColor: theme === 'dark' ? 'black' : 'white',
            color: theme === 'dark' ? 'white' : 'black'
        }}>
            <p sytle={{ color: 'red' }}>Fetching random user</p>
            <h3>Name: {user.name.first} {user.name.last}</h3>
            <p>Email: {user.email} </p>
        </div>
    )
}