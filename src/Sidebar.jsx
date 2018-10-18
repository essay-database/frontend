import React from 'react';
import PropTypes from 'prop-types';

const ICON_SIZE_DEFAULT = 1.5;
const Sidebar = ({ linkFacebookShare = '#', linkTwitterShare = '#' }) => (
  <div className="uk-flex uk-flex-column uk-flex-middle uk-margin-large-top uk-text-meta">
    <div className="uk-margin-small-bottom">
      <span
        iconType="twitter"
        link={linkTwitterShare}
        iconSize={ICON_SIZE_DEFAULT}
      />
    </div>

    <div className="uk-margin-small-bottom">
      <span
        iconType="facebook"
        link={linkFacebookShare}
        iconSize={ICON_SIZE_DEFAULT}
      />
    </div>
  </div>
);

Sidebar.propTypes = {
  linkFacebookShare: PropTypes.string.isRequired,
  linkTwitterShare: PropTypes.string.isRequired
};

export default Sidebar;
