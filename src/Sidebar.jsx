import React from "react";
import PropTypes from "prop-types";
import "./styles/social.css";

const ICON_SIZE = 1.5;

const Sidebar = ({ facebookShareLink, twitterShareLink, horizontal }) => (
  <div
    className={`uk-flex ${
      !horizontal ? "uk-flex-column" : ""
    } uk-flex-middle uk-grid-small`}
    uk-grid=""
  >
    {/* eslint jsx-a11y/anchor-has-content: 0 */}
    <div>
      <div className="uk-panel">
        <a
          href={facebookShareLink}
          uk-icon={`icon: facebook; ratio: ${ICON_SIZE};`}
          className="facebook uk-icon-button"
        />
      </div>
    </div>
    <div>
      <div className="uk-panel">
        <a
          href={twitterShareLink}
          uk-icon={`icon: twitter; ratio: ${ICON_SIZE};`}
          className="twitter uk-icon-button"
        />
      </div>
    </div>
  </div>
);

Sidebar.propTypes = {
  facebookShareLink: PropTypes.string.isRequired,
  twitterShareLink: PropTypes.string.isRequired,
  horizontal: PropTypes.bool
};

export default Sidebar;
