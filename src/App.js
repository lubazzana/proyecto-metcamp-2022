import './App.css';
import 'bulma/css/bulma.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contact from './pages/contact';
import Game from './pages/game';
import Home from './pages/home';
import packageInfo from '../package.json';

function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/game' element={<Game/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

function getBasename() {
  const array = packageInfo.homepage.split("/");

  return array[array.length-1];
}

export default App;
