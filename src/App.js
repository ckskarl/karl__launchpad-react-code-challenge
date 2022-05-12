import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './pages/test';
import Home from './pages/home';
import Universities from './pages/universities'
import Postal from './pages/postal';

function App() {
return (

	<Router>
    <Navbar />
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/universities'  element={<Universities/>} />
      <Route path='/postallookup'  element={<Postal/>} />
    </Routes>
	</Router>
);
}

export default App;
