import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AuthContext = createContext({});

function AuthContextProvider({ children }) {

    const history = useHistory()

    const [authState, setAuthState] = useState({
        status: 'pending',
        error: null,
        user: null,
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        async function getUserInfo() {
            try {
                const response = await axios.get(`http://localhost:8080/api/users`, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                // Met het resultaat van de axios get, wordt de authstate aangevuld.
                setAuthState({
                    ...authState,
                    user: {
                        id: response.id,
                        username: response.username,
                        email: response.email,
                        roles: response.roles,
                    },
                    status: 'done',
                });

            } catch (e) {
                setAuthState({
                    ...authState,
                    user: null,
                    error: e,
                    status: 'done',
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
        // plaats hier de accesstoken in je localstorage
        localStorage.setItem('token', data.accessToken)

        setAuthState({
            ...authState,
            user: {
                // de data.'info' komt uit het object wat we binnen krijgen vanuit de database
                username: data.username,
                email: data.email,
                roles: data.roles,
                isAdmin: data.roles.includes("ROLE_ADMIN"),
            }
        })
    }

    function logout() {
        // clear hier de accesstoken uit je localstorage
        localStorage.clear();
        setAuthState({
            ...authState,
            user: null,
        })
        history.push('/login');
    }

    const providerData = {
        ...authState,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={providerData}>
            {authState.status === 'done' && children}
            {authState.status === 'pending' && <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

function useAuthState() {
    const authState = useContext(AuthContext);

    // iemand is geauthoriseerd wanneer de status === done
    // en als de gebruiker in de authstate staat
    const isDone = authState.status === 'done';
    const isAuthenticated = authState.user !== null && isDone;
    // iemand is admin wanneer de gebruiker in de authstate staat
    // de status op done staat
    // en de user de isAdmin attribuut heeft
    const isAdmin = authState.user !== null && authState.user.isAdmin;

    return {
        ...authState,
        isAuthenticated: isAuthenticated,
        isAdmin: isAdmin,
    }
}

export {
    AuthContext,
    AuthContextProvider,
    useAuthState,
}