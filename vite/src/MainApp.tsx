import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import SignIn from "./pages/SignIn";
import Discover from "./pages/Discover"; // Import the DiscoverPage component
import { Link } from 'react-router-dom';

const MainApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/signin" element={<SignIn />} /> 
      </Routes>
    </Router>
  );
};

export default MainApp;