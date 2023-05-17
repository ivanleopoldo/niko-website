import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Freelance, Home, Login, Map, Register,Jobs,Profile, ProfileLance,Message } from './pages';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './PrivateRoute';
const App = ()=> {
  return (
      <AuthProvider>
        <Routes>
          <Route path = '/' element={<Login/>}/>
          <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/freelance' element={<Freelance/>}/>
          <Route path='/Jobs' element={<Jobs/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/profileLance' element={<ProfileLance/>}/>
          <Route path='/Message' element={<Message/>}/>
        </Routes>
      </AuthProvider>
  );
};

export default App;