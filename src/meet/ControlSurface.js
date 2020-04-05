import React from 'react';
import PropTypes from 'prop-types';
import {
  sortByName, sortByOffice, clearFilters, filterBy,
} from './SortAndFilter';


const ControlSurface = ({ ninjas, setNinjas, rawNinjas }) => (
  <div>
    <input type="text" placeholder="search for name or office" onChange={(e) => filterBy(rawNinjas, setNinjas, e.target.value)} />
    <button type="button" onClick={() => clearFilters(setNinjas, rawNinjas)}>&#9747;</button>
    <button type="button" onClick={() => sortByName(ninjas, setNinjas)}>Sort by Name</button>
    <button type="button" onClick={() => sortByOffice(ninjas, setNinjas)}>Sort by Office</button>
  </div>
);
export default ControlSurface;

ControlSurface.propTypes = {
  ninjas: PropTypes.arrayOf(PropTypes.object).isRequired,
  rawNinjas: PropTypes.arrayOf(PropTypes.object).isRequired,
  setNinjas: PropTypes.func.isRequired,
};
