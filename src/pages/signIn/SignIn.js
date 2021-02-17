import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './SignIn.css';
import { AuthContext, useAuthState } from "../../context/AuthContext";
import logo from "../../assets/logo/heldeep-logo-white.png";
import axios from "axios";
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";

function SignIn() {
    const { login } = useContext(AuthContext);
    const { isAuthenticated } = useAuthState();

    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');

    const history = useHistory();

    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (isAuthenticated === true) {
            // je wordt gepusht na het inloggen naar de home pagina
            history.push('/');
        }
    }, [isAuthenticated])

    async function onSubmit(e) {
        toggleLoading(true);
        setError('');
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/auth/signin', {
                //de tweede komt uit het formulier, de eerste is de naam wat moet worden meegegeven naar de database
                username: username,
                password: password,
            })
            // we roepen hier de context-functie login aan. de context gaat dan met de data die
            // we hebben teruggekregen alles op de juiste plek zetten
            // handel het inloggen aan de voorkant af met de data die we binnen hebben gekregen
            login(response.data);
        } catch(e) {
            console.error(e);
            setError('Inloggen is mislukt');
        }
        toggleLoading(false);
    }

    return (
        <>
            <div className="background-img__signIn">
                <div className="container-logo__signIn">
                    <img className="logo-signIn" src={logo} alt="logo"/>
                </div>
                <div className="form-container__signIn">
                    <h1>Demodrop</h1>
                    <form onSubmit={onSubmit} className="form-signIn">
                        {/*<InputField*/}
                        {/*    id="password-field"*/}
                        {/*    type="email"*/}
                        {/*    value={email}*/}
                        {/*    onChange={(e) => setEmail(e.target.value)}*/}
                        {/*>*/}
                        {/*    Email*/}
                        {/*</InputField>*/}

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
                            id="password-field"
                            className={"input-field input-field--black"}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        >
                            Password
                        </InputField>

                        {/*<InputField*/}
                        {/*    id="password-field"*/}
                        {/*    type="password"*/}
                        {/*    value={confirmPassword}*/}
                        {/*    onChange={(e) => setUsername(e.target.value)}*/}
                        {/*>*/}
                        {/*    Confirm Password*/}
                        {/*</InputField>*/}

                        <Button
                            type="submit"
                            className={"button button-form button__purple"}
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'Sign In'}
                        </Button>
                        {error && <p>{error}</p>}
                    </form>
                    <p>Dont have an account? <Link to="/signup">Create new account</Link></p>
                </div>
            </div>
        </>
    );
}

export default SignIn;