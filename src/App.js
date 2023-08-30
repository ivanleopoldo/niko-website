<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';
=======
import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Freelance,
  Home,
  Login,
  Register,
  Jobs,
  Profile,
  ProfileLance,
  Message,
  Error,
  Calendar,
  Landing,
} from "./pages";
import { AuthProvider } from "./config/context/";
import { PrivateRoute } from "./PrivateRoute";
import { ParallaxProvider } from "react-scroll-parallax";
>>>>>>> Stashed changes

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
    <AuthProvider>
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profileLance" element={<ProfileLance />} />
          <Route path="/Message" element={<Message />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ParallaxProvider>
    </AuthProvider>
>>>>>>> Stashed changes
  );
}

export default App;
