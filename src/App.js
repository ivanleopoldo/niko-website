import { Routes, Route } from 'react-router-dom';
import { Home, Login } from './pages';

function App(){
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
    </Routes>
  );
}

export default App;