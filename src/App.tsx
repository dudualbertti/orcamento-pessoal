// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Gerenciador from './pages/Gerenciador';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import './App.css'; // Arquivo CSS para estilização

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gerenciador">Gerenciador</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gerenciador" element={<Gerenciador />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
