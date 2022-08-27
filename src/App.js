import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contact from './pages/contact';
import Game from './pages/game';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/game' element={<Game/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
