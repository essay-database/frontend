import React from 'react';
import PropTypes from 'prop-types';
// import './styles/social.css';

const ICON_SIZE = 1.5;

const Sidebar = ({ facebookShareLink, twitterShareLink, horizontal }) => (
  <div
    class={`uk-flex ${
      !horizontal ? 'uk-flex-column' : ''
    } uk-flex-middle uk-grid-small`}
    uk-grid=""
  >
    <div>
      <div class="uk-panel">
        <a
          href={facebookShareLink}
          uk-icon={`icon: facebook; ratio: ${ICON_SIZE};`}
          class="facebook uk-icon-button"
        />
      </div>
    </div>
    <div>
      <div class="uk-panel">
        <a
          href={twitterShareLink}
          uk-icon={`icon: twitter; ratio: ${ICON_SIZE};`}
          class="twitter uk-icon-button"
        />
      </div>
    </div>
  </div>
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
