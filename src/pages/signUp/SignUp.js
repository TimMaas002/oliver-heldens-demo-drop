import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignUp.css';
import logo from "../../assets/logo/heldeep-logo-white.png";
import axios from "axios";
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const [createUserSuccess, setCreateUserSuccess] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    const history = useHistory();

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
            <div className="background-img__signUp">
                <div className="container-logo__signUp">
                    <img className="logo-signUp" src={logo} alt="logo"/>
                </div>
                <div className="form-container__signUp">
                    <div className="signUp__arrow">
                        <FontAwesomeIcon icon={faArrowLeft} onClick={() => {history.push('/signin')}}/>
                    </div>
                    <h1>Register</h1>
                    {createUserSuccess === true && <p>Register was succesfully, you can now sign in.</p>}
                    <form onSubmit={onSubmit} className="form-signUp">

                        <InputField
                            id="username-field"
                            className={"input-field input-field--black"}
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        >
                            Username
                        </InputField>

                        <InputField
                            id="email-field"
                            className={"input-field input-field--black"}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                            Email
                        </InputField>

                        <InputField
                            id="password-field"
                            className={"input-field input-field--black"}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                            Password
                        </InputField>

                        <Button
                            type="submit"
                            className={"button button-form button__purple"}
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'Sign Up'}
                        </Button>
                        {error && <p>{error}</p>}
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;