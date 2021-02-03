import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import logo from "../../assets/logo/heldeep-logo-white.png";
import { ReactComponent as BackArrow } from "../../assets/icons/044-left-arrow.svg"

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        console.log(firstName,lastName, username, email, password, confirmPassword);
    }

    return (
        <>
            <div className="background-img-signUp">
                <div className="container-logo-signUp">
                    <img className="logo-signUp" src={logo} alt="logo"/>
                </div>
                <div className="form-container-signUp">
                    <h1>Register</h1>
                    <Link to="/signin" ><BackArrow className="form-back-arrow"/></Link>
                    <form onSubmit={onSubmit} className="form-signUp">
                        <label htmlFor="first-name-field" className="label-signUp">
                            First name
                            <input
                                type="first-name"
                                id="first-name-field"
                                className="input-signUp"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </label>

                        <label htmlFor="last-name-field" className="label-signUp">
                            Last name
                            <input
                                type="last-name"
                                id="last-name-field"
                                className="input-signUp"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </label>

                        <label htmlFor="username-field" className="label-signUp">
                            Username
                            <input
                                type="text"
                                id="username-field"
                                className="input-signUp"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>

                        <label htmlFor="email-field" className="label-signUp">
                            Email
                            <input
                                type="email"
                                id="email-field"
                                className="input-signUp"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>

                        <label htmlFor="password-field" className="label-signUp">
                            Password
                            <input
                                type="password"
                                id="password-field"
                                className="input-signUp"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>

                        <label htmlFor="confirm-password-field" className="label-signUp">
                            Confirm Password
                            <input
                                type="password"
                                id="confirm-password-field"
                                className="input-signUp"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}/>
                        </label>
                        <button
                            type="submit"
                            className="btn-purple"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;