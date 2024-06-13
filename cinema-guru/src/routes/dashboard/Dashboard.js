// src/routes/dashboard/Dashboard.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './dashboard.css';
import Header from '../../components/navigation/Header';

export default function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <Router>
      <div className="dashboard">
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<p>Welcome, {userUsername}!</p>} />
          {/* Diğer rotaları buraya ekleyebilirsiniz */}
        </Routes>
      </div>
    </Router>
  );
}
