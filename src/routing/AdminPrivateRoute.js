import React, {useContext} from "react";
import { AuthContext, useAuthState } from "../context/AuthContext";
import { Redirect, Route } from "react-router-dom";

function AdminPrivateRoute({ children, ...rest }) {
    const { isAuthenticated, isAdmin } = useAuthState();
    // const { isAdmin } = useContext(AuthContext)

    return (
        <Route {...rest} render={() => {
            return isAdmin ? children : <Redirect to="/signin" />
        }}/>
    );
}

export default AdminPrivateRoute;