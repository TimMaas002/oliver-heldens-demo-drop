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
    const { isAuthenticated, isAdmin } = useAuthState();

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const history = useHistory();

    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (isAuthenticated === true) {
            if(isAdmin) {
                // je wordt gepusht na het inloggen naar de dashboard pagina als je admin bent
                history.push('/dashboard');
            } else {
                // je wordt gepusht na het inloggen naar de home pagina als je user bent
                history.push('/');
            }
        }
    }, [isAuthenticated])

    async function onSubmit(e) {
        setError('');
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:8080/api/auth/signin`, {
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