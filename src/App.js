import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Calculator from './Component/Calculator';
import Quotes from './Component/Quotes';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <div className="container">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
