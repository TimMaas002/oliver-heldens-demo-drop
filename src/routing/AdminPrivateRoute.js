import React, {useContext} from "react";
import { AuthContext, useAuthState } from "../context/AuthContext";
import { Redirect, Route } from "react-router-dom";

function AdminPrivateRoute({ children, ...rest }) {
    const { isAuthenticated } = useAuthState();
    const { loginAdmin } = useContext(AuthContext)

    return (
        <Route {...rest} render={() => {
            // add && loginAdmin() after isAuthenticated for admin controle
            return isAuthenticated && loginAdmin ? children : <Redirect to="/signin" />
        }}/>
    );
}

export default AdminPrivateRoute;