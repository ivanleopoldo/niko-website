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
  Landing,
} from "./pages";
import { AuthProvider } from "./config/context/";
import { PrivateRoute } from "./PrivateRoute";
import { ParallaxProvider } from "react-scroll-parallax";

const App = () => {
  return (
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
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profileLance" element={<ProfileLance />} />
          <Route path="/message/:uid" element={<Message />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ParallaxProvider>
    </AuthProvider>
  );
};

export default App;
