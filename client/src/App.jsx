import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import './styles/App.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <ul className="nav-list">
            <li className="link"><Link to="/">Main</Link></li>
            <li className="link"><Link to="/registration">Registration</Link></li>
            <li className="link"><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<Auth />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
