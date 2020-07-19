import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

const Header = () => (
    <header className="main-header">
        <ul>
            <li>
                <NavLink exact activeClassName="active" to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to='/works'>Works</NavLink>
            </li>
        </ul>
    </header>
)

export default Header;