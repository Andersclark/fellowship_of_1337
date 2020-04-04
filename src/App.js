import React, { useState, useEffect } from 'react';
import './App.css';
import fetchNinjas from './services/ninjaService';
import LeetGrid from './meet/LeetGrid';

function App() {
  const [ninjas, setNinjas] = useState([]);

  useEffect(() => {
    fetchNinjas().then((data) => {
      setNinjas(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header"><h1>_fellowship_of_1337</h1></header>
      <LeetGrid ninjas={ninjas} />
    </div>
  );
}

export default App;
