import React from 'react';
import './LeetCard.css';
import PropTypes from 'prop-types';

const LeetCard = ({ ninja, clickHandler }) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div role="button" className="card three columns" id={`${ninja.name}_card`} onClick={() => clickHandler(ninja)}>
    <img
      alt={`Black and white portrait of ${ninja.name}`}
      src={ninja.imagePortraitUrl}
      className="ninjaPortrait"
    />
  </div>
);

LeetCard.propTypes = {
  ninja: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    office: PropTypes.string,
    tagLine: PropTypes.string,
    mainText: PropTypes.string,
    gitHub: PropTypes.string,
    twitter: PropTypes.string,
    stackOverflow: PropTypes.string,
    linkedIn: PropTypes.string,
    imagePortraitUrl: PropTypes.string,
    imageBodyUrl: PropTypes.string,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};
export default LeetCard;
