import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Routes from "./routing/Routes";

function App() {

  return (
      <>
          <Router>
              <Navbar />
              <Routes/>
          </Router>
      </>
  );
}

export default App;
