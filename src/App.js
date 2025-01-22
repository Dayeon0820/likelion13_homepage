import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Activites from "./activites/activites";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/activites" element={<Activites />} />
      </Routes>
    </Router>
  );
}

export default App;
