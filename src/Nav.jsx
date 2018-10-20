import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import NavSidebar from './NavSidebar';
import { LOGO } from './constants';

const MAIN_NAV_ICON_SIZE = 1.2;
const NavIcon = ({ icon = null, dataToggle, iconClass, children }) => (
  <a
    className={iconClass}
    uk-icon={`icon: ${icon}; ratio: ${MAIN_NAV_ICON_SIZE}`}
    uk-toggle={dataToggle}
  >
    {children}
  </a>
);

NavIcon.propTypes = {
  icon: PropTypes.string,
  dataToggle: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default () => (
  <div
    uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky;"
    className="uk-margin-bottom"
    id="top-nav"
    style={{ 'z-index': 1001 }}
  >
    <nav className="uk-navbar-container uk-margin" uk-navbar="">
      <div className="uk-navbar-left">
        <div className="uk-navbar-item">
          <div className="uk-offcanvas-content">
            <NavIcon
              iconClass="uk-margin-small-left uk-icon-link"
              icon="menu"
              dataToggle="target: #offcanvas-nav"
            />
            <NavSidebar />
          </div>
        </div>
      </div>

      <div className="uk-navbar-center">
        <div className="uk-navbar-item">
          <a href="/" className="uk-logo uk-link-text">
            {LOGO}
          </a>
        </div>
      </div>

      <div className="uk-navbar-right">
        <div className="uk-navbar-item">
          <div className="uk-visible@m">
            <NavIcon
              iconClass="uk-button uk-button-danger"
              dataToggle="target: .modal-form"
            >
              Upload essay
            </NavIcon>
          </div>

          <div className="uk-hidden@m">
            <NavIcon
              icon="upload"
              dataToggle="target: .modal-form"
              iconClass="uk-margin-small-right uk-icon-link"
            />
          </div>
          <Form />
        </div>
      </div>
    </nav>
  </div>
);
