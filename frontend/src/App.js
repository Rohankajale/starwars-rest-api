import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './componenets/Navbar'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path = '/' element = {<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
 }


export default App;
