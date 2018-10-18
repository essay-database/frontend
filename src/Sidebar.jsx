import React from 'react';
import PropTypes from 'prop-types';

const ICON_SIZE_DEFAULT = 1;
const Sidebar = ({ facebookShareLink = '#', twitterShareLink = '#' }) => (
  <div
    className="uk-flex uk-flex-column uk-flex-middle uk-flex-center"
    uk-margin=""
  >
    <a
      href=""
      class="uk-icon-button"
      uk-icon={`icon: twitter; ratio: ICON_SIZE_DEFAULT`}
    />
    <a
      href=""
      class="uk-icon-button"
      uk-icon={`icon: facebook; ratio: ICON_SIZE_DEFAULT`}
    />
  </div>
);

Sidebar.propTypes = {
  facebookShareLink: PropTypes.string.isRequired,
  twitterShareLink: PropTypes.string.isRequired
};

export default Sidebar;
