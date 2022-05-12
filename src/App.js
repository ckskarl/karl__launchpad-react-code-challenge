import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from './pages/test';
import Postal from './pages/postal';

function App() {
return (

	<Router>
    <Navbar />
    <Routes>
      <Route path='/home' element={<Test/>} />
      <Route path='/universities'  element={<Test/>} />
      <Route path='/postallookup'  element={<Postal/>} />
    </Routes>
	</Router>
);
}

export default App;
