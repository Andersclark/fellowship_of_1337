import React, { useState, useEffect } from 'react';
import './App.css';
import fetchNinjas from './services/ninjaService';
import LeetGrid from './meet/LeetGrid';
import ControlSurface from './meet/ControlSurface';

function App() {
  const [ninjas, setNinjas] = useState([]);
  const [rawNinjas, setRawNinjas] = useState([]);
  useEffect(() => {
    fetchNinjas().then((data) => {
      setRawNinjas(data);
    });
  }, []);
  useEffect(() => {
    setNinjas(rawNinjas);
  }, [rawNinjas]);

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>_fellowship_of_1337</h1>
        </header>
        <ControlSurface ninjas={ninjas} setNinjas={setNinjas} rawNinjas={rawNinjas} />
        <LeetGrid ninjas={ninjas} />
      </div>
    </div>
  );
}

export default App;
