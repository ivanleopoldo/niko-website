import { Routes, Route } from 'react-router-dom';
import { Home, About } from './pages';

function App(){
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Routes>
  );
}

export default App;