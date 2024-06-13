import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const headers = {authorization: `Bearer ${accessToken}`}
    if (accessToken) {
      axios.post('http://localhost:8000/api/auth', {}, { headers })
      .then((res) => {
          setIsLoggedIn(true);
          setUserUsername(res.data.username);
      }).catch(() => {
        setIsLoggedIn(false);
        setUserUsername("");
      });
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn && <Dashboard setIsLoggedIn={setIsLoggedIn} userUsername={userUsername}/>}
      {!isLoggedIn && <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername}/>}
    </div>
  );
}