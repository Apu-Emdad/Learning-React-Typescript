import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import { BrowserRouter, Routes, Navigate, Route, Link } from "react-router-dom";
import Status from "./components/Status";
import AdvancedProps from "./pages/AdvancedProps";
import EventProps from "./pages/EventProps";
import States from "./pages/States";
import Reducer from "./pages/Reducer";
import Context from "./pages/Context";
import { ThemeContextProvider } from "./components/ThemeContext";
import Gopi from "./pages/Gopi";
import { GopiContextProvider } from "./components/ContextGopi";
import User from "./pages/User";
import { UserContextProvider } from "./components/UserContext/UserContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav style={{ display: "flex" }}>
          <li style={{ padding: "10px" }}>
            <Link to="/greet">Props</Link>
          </li>
          <li style={{ padding: "10px" }}>
            <Link to="/advanced-props">Advance Props</Link>
          </li>
          <li style={{ padding: "10px" }}>
            <Link to="/event-props">Event-Props</Link>
          </li>
          <li style={{ padding: "10px" }}>
            <Link to="/states">States</Link>
          </li>
          <li style={{ padding: "10px" }}>
            <Link to="/reducer">Reducer</Link>
          </li>
          <li style={{ padding: "10px" }}>
            <Link to="/context">Context</Link>
          </li>
          <li style={{ padding: "10px" }}>
            <Link to="/gopi">Gopi Context</Link>
          </li>
          <li style={{ padding: "10px" }}>
            <Link to="/users">User Context</Link>
          </li>
        </nav>
        <Routes>
          <Route
            path="/greet"
            element={<Greet name="STC" messageCount={10} isLoggedIn={true} />}
          />
          <Route path="/advanced-props" element={<AdvancedProps />} />
          <Route path="/event-props" element={<EventProps />} />
          <Route path="/states" element={<States />} />
          <Route path="/reducer" element={<Reducer />} />
          <Route
            path="/context"
            element={
              <ThemeContextProvider>
                <Context />
              </ThemeContextProvider>
            }
          />
          <Route
            path="/gopi"
            element={
              <GopiContextProvider>
                <Gopi />
              </GopiContextProvider>
            }
          />
          <Route
            path="/users"
            element={
              <UserContextProvider>
                <User />
              </UserContextProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
