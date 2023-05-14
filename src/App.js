import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Freelance, Home, Login, Map, Register,Jobs } from './pages';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './routes/PrivateRoute';
const App = ()=> {
  return (
      <AuthProvider>
        <Routes>
          <Route path = '/' element={<Login/>}/>
          <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/map'/>
          <Route path='/Freelance' element={<Freelance/>}/>
          <Route path='/Jobs' element={<Jobs/>}/>
        </Routes>
      </AuthProvider>
  );
};

export default App;