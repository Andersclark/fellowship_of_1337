import React from 'react';
import './LeetCard.css';
import PropTypes from 'prop-types';
import LeetCard from './LeetCard';


const LeetGrid = ({ ninjas }) => (
  <div className="grid">
    { ninjas.map((ninja) => <LeetCard key={ninja.name} ninja={ninja} />) }
  </div>
);

export default LeetGrid;
LeetGrid.propTypes = {
  ninjas: PropTypes.arrayOf(PropTypes.object).isRequired,
};
