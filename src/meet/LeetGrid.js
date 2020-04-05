import React, { useState } from 'react';
import './LeetCard.css';
import PropTypes from 'prop-types';
import LeetCard from './LeetCard';
import NinjaProfile from './NinjaProfile';

const LeetGrid = ({ ninjas }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalNinja, setModalNinja] = useState({});

  function renderModal(ninja) {
    setModalNinja(ninja);
    setShowModal(true);
  }

  return (
    <>
      {showModal && <NinjaProfile modalNinja={modalNinja} setShowModal={setShowModal} />}
      { ninjas.map((ninja) => (
        <LeetCard
          key={ninja.name}
          ninja={ninja}
          clickHandler={renderModal}
        />
      )) }
    </>
  );
};

export default LeetGrid;
LeetGrid.propTypes = {
  ninjas: PropTypes.arrayOf(PropTypes.object).isRequired,
};
