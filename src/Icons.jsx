import React from 'react';

import Icon from './Icon';
import './styles/icons.css';

function handleView() {
  // console.log("handleView()");
}

function handleShowComments() {
  // console.log("handleShowComments()");
}

const ViewIcon = ({ countRight, countAbove, iconSize, isHorizontal }) => (
  <Icon
    iconClass="fas fa-eye no-pointer"
    countRight={countRight}
    countAbove={countAbove}
    iconSize={iconSize}
    handler={handleView}
    isHorizontal={isHorizontal}
  />
);

const CommentsIcon = ({ countRight, iconSize, isHorizontal }) => (
  <Icon
    iconSize={iconSize}
    countRight={countRight}
    handler={handleShowComments}
    iconClass="fas fa-comments"
    isHorizontal={isHorizontal}
  />
);

const TwitterIcon = ({ link, iconSize, isHorizontal }) => (
  <Icon
    iconSize={iconSize}
    link={link}
    iconClass="fab fa-twitter"
    id="twitter"
    blankTarget
    isHorizontal={isHorizontal}
  />
);

const FacebookIcon = ({ link, iconSize, isHorizontal }) => (
  <Icon
    iconSize={iconSize}
    link={link}
    iconClass="fab fa-facebook-f"
    id="facebook"
    blankTarget
    isHorizontal={isHorizontal}
  />
);

export default ({ iconType = 'views', ...restProps }) => (
  <div>
    {
      {
        facebook: <FacebookIcon {...restProps} />,
        twitter: <TwitterIcon {...restProps} />,
        views: <ViewIcon {...restProps} />,
        comments: <CommentsIcon {...restProps} />
      }[iconType]
    }
  </div>
);
