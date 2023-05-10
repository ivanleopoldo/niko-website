import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainApp from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import Map from './pages/Map';

const App = ()=> {
  return (
      <div className='app'>
        <Routes>
          <Route path = '/' element={<Login/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Map' element={<Map/>}/>
        </Routes>
      </div>


  );
};


export default App