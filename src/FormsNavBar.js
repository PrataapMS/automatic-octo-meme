import React from 'react';
import {Link} from 'react-router-dom';

export const FormsNavBar = () => (
    <ul>
        <li>
            <Link to="/forms/controlled" className="App-link">Controlled Form</Link>
        </li>
        <li>
            <Link to="/forms/unControlled" className="App-link">Uncontrolled Form</Link>
        </li>
    </ul>
)