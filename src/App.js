import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./default/header";
import Activites from "./activites/activites";
import MainPage from "./main/main";
import About from "./about/about";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/activities" element={<Activites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

