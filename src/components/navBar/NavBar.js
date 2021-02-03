import React from 'react';
import { NavLink } from "react-router-dom";
import './NavBar.css';
import logo from '../../assets/logo/heldeep-logo-white.png';

function NavBar() {

    return (
        <nav>
            <div className="nav-container">
                <img src={logo} alt="logo"/>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <a href="https://heldeeprecords.com/">Heldeep records</a>
                    </li>

                    <li>
                        <NavLink to="/about" activeClassName="active-link">About</NavLink>
                    </li>

                    <li>
                        <NavLink to="/profile" activeClassName="active-link">Profile</NavLink>
                    </li>

                    <li>
                        <NavLink to="/signin" activeClassName="active-link" >Logout</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;