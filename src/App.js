import './App.css';
import React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
// import NavBar from "./components/navBar/NavBar";
import About from "./pages/about/About";
import Dashboard from "./pages/dashboard/Dashboard";
import DetailPage from "./pages/detailPage/DetailPage";
import Feedback from "./pages/feedback/Feedback";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import { useAuthState } from "./context/AuthContext";

function App() {
    const { isAuthenticated } = useAuthState();

  return (
      <>
          {/*<NavBar />*/}
          <Switch>
              <Route exact path="/">
                  {isAuthenticated ? <Home /> : <Redirect to="/signin" />}
              </Route>
              <Route path="/detailpage">
                  {isAuthenticated ? <DetailPage /> : <Redirect to="/signin" />}
              </Route>
              <Route path="/dashboard">
                  {isAuthenticated ? <Dashboard /> : <Redirect to="/signin" />}
              </Route>
              <Route path="/feedback">
                  {isAuthenticated ? <Feedback /> : <Redirect to="/signin" />}
              </Route>
              <Route path="/profile">
                  {isAuthenticated ? <Profile /> : <Redirect to="/signin" />}
              </Route>
              <Route exact path="/signin">
                  <SignIn />
              </Route>
              <Route exact path="/signup">
                  <SignUp />
              </Route>
              <Route path="/about">
                  {isAuthenticated ? <About />: <Redirect to="/signin" />}
              </Route>
          </Switch>
      </>
  );
}

export default App;
