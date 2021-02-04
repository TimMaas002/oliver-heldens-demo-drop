import React, {useState, useContext, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './SignIn.css';
import { AuthContext, useAuthState } from "../../context/AuthContext";
import logo from "../../assets/logo/heldeep-logo-white.png";
import axios from "axios";

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
            history.push('/');
        }
    }, [isAuthenticated])

    async function onSubmit(e) {
        toggleLoading(true);
        setError('');
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/auth/signin', {
                username: username,
                password: password,
            })

            login(response.data);
        } catch(e) {
            console.error(e);
            setError('Inloggen is mislukt');
        }
        toggleLoading(false);
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
                        {/*<label htmlFor="email-field" className="label-signIn">*/}
                        {/*    Email*/}
                        {/*    <input*/}
                        {/*        type="email"*/}
                        {/*        id="email-field"*/}
                        {/*        className="input-signIn"*/}
                        {/*        value={email}*/}
                        {/*        onChange={(e) => setEmail(e.target.value)}*/}
                        {/*    />*/}
                        {/*</label>*/}

                        <label htmlFor="username-field" className="label-signIn">
                            Username
                            <input
                                type="username"
                                id="username-field"
                                className="input-signIn"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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

                        {/*<label htmlFor="password-confirm-field" className="label-signIn">*/}
                        {/*    Confirm Password*/}
                        {/*    <input*/}
                        {/*        type="password"*/}
                        {/*        id="password-confirm-field"*/}
                        {/*        className="input-signIn"*/}
                        {/*        value={confirmPassword}*/}
                        {/*        onChange={(e) => setConfirmPassword(e.target.value)} />*/}
                        {/*</label>*/}
                        <button
                            type="submit"
                            className="btn-purple"
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'Sign In'}
                        </button>
                        {error && <p>{error}</p>}
                    </form>
                    <p>Dont have an account? <Link to="/signup" className="p-sign-in" >Create new account</Link></p>
                </div>
            </div>
        </>
    );
}

export default SignIn;