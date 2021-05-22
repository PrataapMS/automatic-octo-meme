import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => (
    <ul>
        <li>
            <Link to="/" className="App-link">Go Home</Link>
        </li>
        <li>
            <Link to="/counter" className="App-link">Go to Counter page</Link>
        </li>
        <li>
            <Link to="/people-list" className="App-link">Go to People List page</Link>
        </li>
        <li>
            <Link to="/random-test" className="App-link">Go to Random Test page</Link>
        </li>
        <li>
            <Link to="/forms" className="App-link">Forms</Link>
        </li>
        <li>
            <Link to="/user" className="App-link">User Profile</Link>
        </li>

    </ul>
)