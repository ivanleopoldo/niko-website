import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Map, Register } from './pages';
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
        </Routes>
      </AuthProvider>
  );
};

export default App;