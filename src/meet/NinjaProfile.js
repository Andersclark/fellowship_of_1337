import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './NinjaProfile.css';

const NinjaProfile = ({ modalNinja, setShowModal }) => {
  const ninja = modalNinja;
  function hideModal() {
    const modal = document.getElementById('ninjaModal');
    modal.style.display = 'none';
    setShowModal(false);
  }
  useEffect(() => {
    const modal = document.getElementById('ninjaModal');
    modal.style.display = 'block';
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
        setShowModal(false);
      }
    };
  }, [setShowModal]);
  return (
    <>
      <div id="ninjaModal" className="modal">
        <div className="modal-content">
          <button type="button" className="close" onClick={() => hideModal()}>&#9747;</button>
          <div className="container ninjaProfile">
            <div className="row">
              <div className="two columns">
                <img
                  alt={`Full body of ${ninja.name}`}
                  src={ninja.imageBodyUrl}
                  className="ninjaBody"
                />
              </div>
              <div className="ten columns">
                <h1>
                  {ninja.name}
                  {' '}
                  @
                  {ninja.office}
                </h1>
                <h5>{ninja.tagLine}</h5>
                {/* eslint-disable-next-line react/no-danger */}
                <div dangerouslySetInnerHTML={{ __html: ninja.mainText }} />
                <div className="socialButtons">
                  {ninja.linkedIn && <a href={`https://www.linkedin.com/${ninja.linkedIn}`} className="fa fa-linkedin">in</a>}
                  {ninja.gitHub && <a href={`https://www.github.com/${ninja.gitHub}`} className="fa fa-github">g</a>}
                  {ninja.stackOverflow && <a href={`https://www.stackoverflow.com/users/${ninja.stackOverflow}`} className="fa fa-stackoverflow">s</a>}
                  {ninja.twitter && <a href={`https://twitter.com/intent/user?user_id=${ninja.twitter}`} className="fa fa-twitter">t</a>}
                  <a href={`mailto:${ninja.email}`} className="fa fa-email">@</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
NinjaProfile.propTypes = {
  modalNinja: PropTypes.shape({
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
  setShowModal: PropTypes.func.isRequired,
};
export default NinjaProfile;
