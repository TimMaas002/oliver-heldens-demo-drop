import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import logo from "../../assets/logo/heldeep-logo-white.png";
import axios from "axios";
import InputField from "../../components/inputField/InputField";

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
                    {/*<Link to="/signin" ><BackArrow className="form-back-arrow"/></Link>*/}
                    <form onSubmit={onSubmit} className="form-signUp">
                        {/*<InputField*/}
                        {/*    id="first-name-field"*/}
                        {/*    type="text"*/}
                        {/*    value={firstName}*/}
                        {/*    onChange={(e) => setFirstName(e.target.value)}*/}
                        {/*>*/}
                        {/*    First name*/}
                        {/*</InputField>*/}

                        {/*<InputField*/}
                        {/*    id="last-name-field"*/}
                        {/*    type="text"*/}
                        {/*    value={lastName}*/}
                        {/*    onChange={(e) => setLastName(e.target.value)}*/}
                        {/*>*/}
                        {/*    Last name*/}
                        {/*</InputField>*/}

                        <InputField
                            id="username-field"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        >
                            Username
                        </InputField>

                        <InputField
                            id="email-field"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                            Email
                        </InputField>

                        <InputField
                            id="password-field"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                            Password
                        </InputField>

                        {/*<InputField*/}
                        {/*    id="confirm-password-field"*/}
                        {/*    type="password"*/}
                        {/*    value={confirmPassword}*/}
                        {/*    onChange={(e) => setConfirmPassword(e.target.value)}*/}
                        {/*>*/}
                        {/*    Confirm Password*/}
                        {/*</InputField>*/}

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