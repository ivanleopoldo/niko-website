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

const App = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default App;
