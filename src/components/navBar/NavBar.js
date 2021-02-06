import React, { useContext, useEffect } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import './NavBar.css';
import logo from '../../assets/logo/heldeep-logo-white.png';
import { AuthContext, useAuthState } from "../../context/AuthContext";

function NavBar() {

    const history = useHistory();

    const { isAuthenticated } = useAuthState();
    const { logout } = useContext(AuthContext);

    // useEffect(() => {
    //     if (isAuthenticated === false) {
    //         history.push('/signin');
    //     }
    // }, [isAuthenticated]);

    return (
        <nav>
            <div className="nav-container">
                <img src={logo} alt="logo"/>
                {isAuthenticated ? (
                    <>
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
                            <NavLink to="/signin">Logout</NavLink>
                        </li>
                    </ul>
                    </>
                ) : (
                    <>
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
                            <NavLink to="/signin">Logout</NavLink>
                        </li>
                    </ul>
                    </>
                )}
            </div>
        </nav>
    );
}

export default NavBar;