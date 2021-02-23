import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Home from "../pages/home/Home";
import UploadList from "../pages/uploadList/UploadList";
import DetailPage from "../pages/detailPage/DetailPage";
import AdminDetailPage from "../pages/detailPage/AdminDetailPage";
import Dashboard from "../pages/dashboard/Dashboard";
import Feedback from "../pages/feedback/Feedback";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import About from "../pages/about/About";
import PrivateRoute from "./PrivateRoute";
import AdminPrivateRoute from "./AdminPrivateRoute";

function Routes() {

    return (
        <>
            <Switch>
                <PrivateRoute exact path="/">
                    <Home/>
                </PrivateRoute>
                <PrivateRoute path="/home-upload-list">
                    <UploadList/>
                </PrivateRoute>
                <PrivateRoute path="/detailpage">
                    <DetailPage/>
                </PrivateRoute>
                <AdminPrivateRoute path="/admin-detailpage">
                    <AdminDetailPage/>
                </AdminPrivateRoute>
                <AdminPrivateRoute path="/dashboard">
                    <Dashboard/>
                </AdminPrivateRoute>
                <AdminPrivateRoute path="/feedback">
                    <Feedback/>
                </AdminPrivateRoute>
                <Route exact path="/signin">
                    <SignIn/>
                </Route>
                <Route exact path="/signup">
                    <SignUp/>
                </Route>
                <PrivateRoute path="/about">
                    <About/>
                </PrivateRoute>
            </Switch>
        </>
    );
}

export default Routes;