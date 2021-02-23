import React, {useContext} from "react";
import { AuthContext, useAuthState } from "../context/AuthContext";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
    const { isAuthenticated } = useAuthState();
    // const { loginAdmin } = useContext(AuthContext)

    return (
        <Route {...rest} render={() => {
            // add && loginAdmin() after isAuthenticated for admin controle
            return isAuthenticated ? children : <Redirect to="/signin" />
        }}/>
    );
}

export default PrivateRoute;