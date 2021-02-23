import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AuthContext = createContext({});

function AuthContextProvider({ children }) {

    const history = useHistory()
    const [admin, setAdmin] = useState(false);

    // maak hier de authstate aan
    const [authState, setAuthState] = useState({
        status: 'pending',
        error: null,
        user: null,
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        async function getUserInfo() {
            try {
                const response = await axios.get('http://localhost:8080/api/users', {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setAuthState({
                    ...authState,
                    user: {
                        id: response.data.id,
                        username: response.data.username,
                        email: response.data.email,
                    },
                    status: 'done',
                });

            } catch (e) {
                setAuthState({
                    ...authState,
                    user: null,
                    error: e,
                    status: 'done'
                });
            }
        }

        if (authState.user === null && token) {
            getUserInfo();
        } else {
            setAuthState({
                ...authState,
                error: null,
                user: null,
                status: 'done'
            });
        }
    }, []);

    function login(data) {
        console.log(data);
        // plaats hier de accesstoken in je localstorage
        localStorage.setItem('token', data.accessToken)

        setAuthState({
            ...authState,
            // voeg aan de originele user binnen authState onderstaande informatie toe
            user: {
                // de data.'info' komt uit het object wat we binnen krijgen vanuit de database
                username: data.username,
                email: data.email,
                roles: data.roles,
            }
        })
        isAdmin(data.roles);
    }

    function isAdmin(data){
        if (data.roles[0].includes("ROLE_ADMIN")) {
            setAdmin(true);
        } else {
            setAdmin(false);
        }
        console.log(admin);
    }

    function logout() {
        // maak de localStorage leeg
        localStorage.clear();
        // zet de user waarde weer op null
        setAuthState({
            ...authState,
            user: null,
        })
        setAdmin(false);
        history.push('/signin');
    }

    function loginAdmin() {
        return admin;
    }

    const providerData = {
        ...authState,
        login: login,
        logout: logout,
        loginAdmin: loginAdmin,
    }

    return (
        <AuthContext.Provider value={providerData}>
            {authState.status === 'done' && children}
            {authState.status === 'pending' && <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

function useAuthState() {
    const authState = useContext(AuthContext);

    // iemand is geauthoriseerd wanner de status === done
    // en als de gebruiker in de authstate staat
    const isDone = authState.status === 'done';
    const isAuthenticated = authState.user !== null && isDone;

    return {
        ...authState,
        isAuthenticated: isAuthenticated,
    }
}

export {
    AuthContext,
    AuthContextProvider,
    useAuthState,
}