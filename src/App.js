import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Activites from "./activites/activites";
import About from "./about/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/activites" element={<Activites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
