import React from 'react';
import PropTypes from 'prop-types';
import './styles/social.css';

const ICON_SIZE = 1.5;

const Sidebar = ({ facebookShareLink, twitterShareLink, horizontal }) => (
  <ul className={`uk-iconnav ${!horizontal ? 'uk-iconnav-vertical' : ''}`}>
    <li>
      <a
        href={facebookShareLink}
        uk-icon={`icon: facebook; ratio: ${ICON_SIZE}`}
        className="facebook uk-icon-button"
      />
    </li>
    <li>
      <a
        href={twitterShareLink}
        uk-icon={`icon: twitter; ratio: ${ICON_SIZE}`}
        className="twitter uk-icon-button"
      />
    </li>
  </ul>
);

const SHARED_PROPTYPES = {
  facebookShareLink: PropTypes.string.isRequired,
  twitterShareLink: PropTypes.string.isRequired
};

Sidebar.propTypes = {
  ...SHARED_PROPTYPES,
  horizontal: PropTypes.bool
};

export default Sidebar;
