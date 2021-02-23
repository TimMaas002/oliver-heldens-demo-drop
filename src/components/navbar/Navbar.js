import React, { useContext, useState }  from 'react';
import { NavLink, useHistory } from "react-router-dom";
import './Navbar.css';
import Logo from '../../assets/logo/heldeep-logo-white.png';
import { AuthContext, useAuthState } from "../../context/AuthContext";
import Button from "../button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {

    const history = useHistory();

    const [openMenu, toggleOpenMenu] = useState(false);

    const { logout } = useContext(AuthContext);
    const { isAuthenticated } = useAuthState();

    return (
        <>
            <nav className="nav-container">
                <NavLink to="/" className="nav-logo">
                    <img src={Logo} alt="website-logo" className="nav-image"/>
                </NavLink>
                <ul className="nav-menu" style={{ transform: openMenu ? "translateX(0px)" : "" }}>
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link" activeClassName="nav-link--active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://heldeeprecords.com/">Heldeep records</a>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link" activeClassName="nav-link--active">About</NavLink>
                    </li>
                    {isAuthenticated ? (
                        <Button className={'button button-nav nav-item'} type="button" onClick={() => logout()}>
                            Logout
                        </Button>
                    ) : (
                        <Button className={'button button-nav nav-item'} type="button" onClick={() => {history.push('/signin')}}>
                            Sign in
                        </Button>
                    )}
                </ul>
                <div className="menu-icon">
                    <FontAwesomeIcon icon={faBars} onClick={() => toggleOpenMenu(!openMenu)}/>
                </div>
            </nav>
        </>
    );
}

export default Navbar;