import React from 'react';
import PropTypes from 'prop-types';

const ICON_SIZE = 1.5;

const Sidebar = ({ facebookShareLink, twitterShareLink, horizontal }) => (
  <ul class={`uk-iconnav ${!horizontal ? 'uk-iconnav-vertical' : ''}`}>
    <li>
      <a
        href={facebookShareLink}
        uk-icon={`icon: facebook; ratio: ${ICON_SIZE}`}
      />
    </li>
    <li>
      <a
        href={twitterShareLink}
        uk-icon={`icon: twitter; ratio: ${ICON_SIZE}`}
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
