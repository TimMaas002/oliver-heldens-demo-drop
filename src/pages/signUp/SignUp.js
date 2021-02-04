import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import logo from "../../assets/logo/heldeep-logo-white.png";
import { ReactComponent as BackArrow } from "../../assets/icons/044-left-arrow.svg"
import axios from "axios";

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');

    const [createUserSuccess, setCreateUserSuccess] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    async function onSubmit(e) {
        toggleLoading(true);
        setError('');
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/auth/signup', {
                username: username,
                email: email,
                password: password,
                role: ["user"],
        })
            if (response.status === 200) {
                setCreateUserSuccess(true);
            }
        } catch (e) {
            console.error(e);
            if (e.message.includes('400')) {
                setError('Er bestaat al een account met deze gebruikersnaam');
            } else {
                setError('Er is iets mis gegaan bij het verzenden, probeer het opnieuw');
            }
        }
        toggleLoading(false);
    }

    return (
        <>
            <div className="background-img-signUp">
                <div className="container-logo-signUp">
                    <img className="logo-signUp" src={logo} alt="logo"/>
                </div>
                <div className="form-container-signUp">
                    <h1>Register</h1>
                    {createUserSuccess === true && <p>Het is gelukt met registreren! Log je nu in!</p>}
                    <Link to="/signin" ><BackArrow className="form-back-arrow"/></Link>
                    <form onSubmit={onSubmit} className="form-signUp">
                        {/*<label htmlFor="first-name-field" className="label-signUp">*/}
                        {/*    First name*/}
                        {/*    <input*/}
                        {/*        type="first-name"*/}
                        {/*        id="first-name-field"*/}
                        {/*        className="input-signUp"*/}
                        {/*        value={firstName}*/}
                        {/*        onChange={(e) => setFirstName(e.target.value)}*/}
                        {/*    />*/}
                        {/*</label>*/}

                        {/*<label htmlFor="last-name-field" className="label-signUp">*/}
                        {/*    Last name*/}
                        {/*    <input*/}
                        {/*        type="last-name"*/}
                        {/*        id="last-name-field"*/}
                        {/*        className="input-signUp"*/}
                        {/*        value={lastName}*/}
                        {/*        onChange={(e) => setLastName(e.target.value)}*/}
                        {/*    />*/}
                        {/*</label>*/}

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

                        {/*<label htmlFor="confirm-password-field" className="label-signUp">*/}
                        {/*    Confirm Password*/}
                        {/*    <input*/}
                        {/*        type="password"*/}
                        {/*        id="confirm-password-field"*/}
                        {/*        className="input-signUp"*/}
                        {/*        value={confirmPassword}*/}
                        {/*        onChange={(e) => setConfirmPassword(e.target.value)}/>*/}
                        {/*</label>*/}
                        <button
                            type="submit"
                            className="btn-purple"
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'Sign Up'}
                        </button>
                        {error && <p>{error}</p>}
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;