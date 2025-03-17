import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./default/header";
import Footer from "./default/footer";
import Activites from "./activites/activites";
import MainPage from "./main/main";
import About from "./about/about";
import Login from "./signup/login";
import Signup from "./signup/signup";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/activities" element={<Activites />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
