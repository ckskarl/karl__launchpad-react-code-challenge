import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './pages/test';
import Universities from './pages/universities'

function App() {
return (

	<Router>
    <Navbar />
    <Routes>
      <Route path='/home' element={<Test/>} />
      <Route path='/universities'  element={< Universities/>} />
      <Route path='/postallookup'  element={<Test/>} />
    </Routes>
	</Router>
);
}

export default App;
