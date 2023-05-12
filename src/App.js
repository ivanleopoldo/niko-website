import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Map from './pages/Map';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './routes/PrivateRoute';
import Register from './pages/Register';

const App = ()=> {
  return (
      <AuthProvider>
        <Routes>
          <Route path = '/' element={<Login/>}/>
          <Route path='/Home' element={<PrivateRoute><Home/></PrivateRoute>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </AuthProvider>


  );
};


export default App