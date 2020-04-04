import React from 'react';
import './LeetCard.css';
import PropTypes from 'prop-types';

const LeetCard = ({ ninja }) => <div className="card"><h3>{ninja.name}</h3></div>;

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
};
export default LeetCard;