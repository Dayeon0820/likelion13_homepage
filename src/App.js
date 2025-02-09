import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Activites from "./activites/activites";
import MainPage from "./main/main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/activites" element={<Activites />} />
      </Routes>
    </Router>
  );
}

export default App;

