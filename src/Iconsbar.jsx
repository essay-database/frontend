import React from 'react';
import Icons from './Icons';

// TODO add proptypes
const iconSizeDefault = 1.5;
const VerticalSocialbar = ({
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

const HorizontalSocialbar = ({
  views = 0,
  linkFacebookShare = '#',
  linkTwitterShare = '#',
  commentsCount = 0
}) => (
  <div className="uk-flex uk-flex-between uk-text-meta">
    <div>
      <Icons
        iconType="views"
        isHorizontal
        countRight={views}
        iconSize={iconSizeDefault * 2}
      />
    </div>

    <div className="uk-flex uk-flex-middle">
      <div>
        <Icons
          iconType="comments"
          isHorizontal
          countRight={commentsCount}
          iconSize={iconSizeDefault}
        />
      </div>

      <div>
        <Icons
          iconType="twitter"
          isHorizontal
          link={linkTwitterShare}
          iconSize={iconSizeDefault}
        />
      </div>

      <div>
        <Icons
          iconType="facebook"
          isHorizontal
          link={linkFacebookShare}
          iconSize={iconSizeDefault}
        />
      </div>
    </div>
  </div>
);

export default ({ ori, ...restProps }) => (
  <div>
    {ori === 'h' ? (
      <HorizontalSocialbar {...restProps} />
    ) : (
      <VerticalSocialbar {...restProps} />
    )}
  </div>
);
