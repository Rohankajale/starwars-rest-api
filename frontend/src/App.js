import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './componenets/Navbar'
import Home from './pages/Home';

class App extends Component {
  render() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path = '/' element = {<Home />}></Route>
        </Routes>
      </div>
   </Router>
  );
 }
}

export default App;
