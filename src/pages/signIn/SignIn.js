import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import logo from "../../assets/logo/heldeep-logo-white.png";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        console.log(email, password, confirmPassword);
    }

    return (
        <>
            <div className="background-img-signIn">
                <div className="container-logo-signIn">
                    <img className="logo-signIn" src={logo} alt="logo"/>
                </div>
                <div className="form-container-signIn">
                    <h1>Demodrop</h1>
                    <form onSubmit={onSubmit} className="form-signIn">
                        <label htmlFor="email-field" className="label-signIn">
                            Email
                            <input
                                type="email"
                                id="email-field"
                                className="input-signIn"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>

                        <label htmlFor="password-field" className="label-signIn">
                            Password
                            <input
                                type="password"
                                id="password-field"
                                className="input-signIn"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </label>

                        <label htmlFor="password-confirm-field" className="label-signIn">
                            Confirm Password
                            <input
                                type="password"
                                id="password-confirm-field"
                                className="input-signIn"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)} />
                        </label>
                        <button
                            type="submit"
                            className="btn-purple"
                        >
                            Sign In
                        </button>
                    </form>
                    <p>Dont have an account? <Link to="/signup" className="p-sign-in" >Create new account</Link></p>
                </div>
            </div>
        </>
    );
}

export default SignIn;