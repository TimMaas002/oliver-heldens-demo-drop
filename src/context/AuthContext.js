import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AuthContext = createContext({});

function AuthContextProvider({ children }) {

    const history = useHistory()

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
                // We kunnen de gebruikersdata ophalen omdat we onszelf authenticeren met de token
                const response = await axios.get(`http://localhost:8080/api/users`, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                // met het resultaat vullen we de context
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
                // Gaat er toch iets mis? Dan zetten we de error in de context
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
                isAdmin: data.roles.includes("ROLE_ADMIN"),
            }
        })
        // console.log("USER ID", data.id);
    }

    function logout() {
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

    // iemand is geauthoriseerd wanner de status === done
    // en als de gebruiker in de authstate staat
    const isDone = authState.status === 'done';
    const isAuthenticated = authState.user !== null && isDone;
    const isAdmin = authState.user !==null && authState.user.isAdmin;

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