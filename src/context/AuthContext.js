import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    // maak hier de authstate aan
    const [authState, setAuthState] = useState({
        status: 'pending',
        error: null,
        user: null,
    });

    useEffect(() => {

        // een timeout waarbij de status op done wordt gezet middels een 'delay' van 2000ms
        setTimeout(() => {
            setAuthState({
                ...authState,
                status: 'done',
            })
        }, 2000)
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

    }

    function logout() {
        // maak de localStorage leeg
        localStorage.clear();
        // zet de user waarde weer op null
        setAuthState({
            ...authState,
            user: null,
        })
    }

    const providerData = {
        ...authState,
        login: login,
        logout: logout,
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