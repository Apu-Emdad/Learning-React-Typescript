import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import { BrowserRouter, Routes, Navigate, Route, Link } from "react-router-dom";
import Status from "./components/Status";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div style={{ display: "flex" }}>
          <li style={{ padding: "10px" }}>
            <Link to="/greet">Props</Link>
          </li>
          <li style={{ padding: "10px" }}>
            <Link to="/status">Advance Props</Link>
          </li>
        </div>
        <Routes>
          <Route
            path="/greet"
            element={<Greet name="STC" messageCount={10} isLoggedIn={true} />}
          />
          <Route path="/status" element={<Status status="loading" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
