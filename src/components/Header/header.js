import React from 'react';
import './Header.css'; 

const Header = () => {
    return (
        <header className="header">
            <h1 className="top-heading">BookMyCollab</h1>
            <nav>
                <ul className="nav-links">
                    <li>
                        <a href="#">What We Do</a>
                    </li>
                    <li>
                        <a href="#">How It Works</a>
                    </li>
                    <li>
                        <a href="#">Join Us As Brand</a>
                    </li>
                    <li>
                        <a href="#">Join Us As Creator</a>
                    </li>
                    <li>
                         <button className="nav-button">Login</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

