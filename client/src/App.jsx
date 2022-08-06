import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Main from './pages/Main/Main';
import './styles/App.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <ul className="nav-list">
            <li className="link"><Link to="/main">Main</Link></li>
            <li className="link"><Link to="/registration">Registration</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/registration" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
