import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import test from './pages/test';

function App() {
return (

	<Router>
    <Navbar />
    <div>test</div>
    <Routes>
      <Route path='/home' exact component={test} />
      <Route path='/universities' component={test} />
      <Route path='/postallookup' component={test} />
    </Routes>
	</Router>
);
}

export default App;
