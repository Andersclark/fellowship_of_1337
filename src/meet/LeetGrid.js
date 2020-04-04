import React from 'react';
import './LeetCard.css';
import LeetCard from './LeetCard';


const LeetGrid = ({ ninjas }) => ninjas.map((ninja) => <LeetCard key={ninja.name} ninja={ninja} />);

export default LeetGrid;
