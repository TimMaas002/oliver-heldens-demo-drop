import './App.css';
import React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Dashboard from "./pages/dashboard/Dashboard";
import DetailPage from "./pages/detailPage/DetailPage";
import Feedback from "./pages/feedback/Feedback";
import Home from "./pages/home/Home";
import UploadList from "./pages/uploadList/UploadList";
import Profile from "./pages/profile/Profile";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import { useAuthState } from "./context/AuthContext";

function App() {
    const { isAuthenticated } = useAuthState();

  return (
      <>
          <Navbar />
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/home-upload-list">
                  <UploadList />
              </Route>
              <Route path="/detailpage">
                  <DetailPage />
              </Route>
              <Route path="/dashboard">
                  <Dashboard />
              </Route>
              <Route path="/feedback">
                  <Feedback />
              </Route>
              <Route path="/profile">
                  <Profile />
              </Route>
              <Route exact path="/signin">
                  <SignIn />
              </Route>
              <Route exact path="/signup">
                  <SignUp />
              </Route>
              <Route path="/about">
                  <About />
              </Route>
          </Switch>
      </>
  );
}

export default App;
