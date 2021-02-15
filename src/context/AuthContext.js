import React, {createContext, useContext, useEffect, useState} from "react";

const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [authState, setAuthState] = useState({
        status: 'pending',
        error: null,
        user: null,
    });

    useEffect(() => {

        setTimeout(() => {
            setAuthState({
                ...authState,
                status: 'done',
            })
        }, 2000)
    }, []);

    function login(data) {
        console.log(data);
        localStorage.setItem('token', data.accessToken)

        setAuthState({
            ...authState,
            user: {
                username: data.username,
                email: data.email,
                roles: data.roles,
            }
        })

    }

    function logout() {
        localStorage.clear();
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

    return(
        <AuthContext.Provider value={providerData}>
            {authState.status === 'done' && children}
            {authState.status === 'pending' && <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

function useAuthState() {
    const authState = useContext(AuthContext);

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