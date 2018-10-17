import React from 'react';
import Icons from './Icons';

// TODO add proptypes
const iconSizeDefault = 1.5;
const Sidebar = ({
  views = 0,
  linkFacebookShare = '#',
  linkTwitterShare = '#'
}) => (
  <div className="uk-flex uk-flex-column uk-flex-middle uk-margin-large-top uk-text-meta">
    <div className="uk-margin-small-bottom">
      <Icons
        iconType="views"
        countAbove={views}
        iconSize={iconSizeDefault * 2}
      />
    </div>

    <div className="uk-margin-small-bottom">
      <Icons
        iconType="twitter"
        link={linkTwitterShare}
        iconSize={iconSizeDefault}
      />
    </div>

    <div className="uk-margin-small-bottom">
      <Icons
        iconType="facebook"
        link={linkFacebookShare}
        iconSize={iconSizeDefault}
      />
    </div>
  </div>
);

export default Sidebar;
