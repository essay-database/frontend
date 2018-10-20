import React from 'react';
import {
  COPYRIGHT,
  ABOUT,
  FACEBOOK_PAGE_LINK,
  TWITTER_PAGE_LINK
} from './constants';
import './styles/social.css';
import './styles/footer.css';

export default () => (
  <footer
    className="uk-section uk-section-large uk-section-secondary uk-light"
    style={{ paddingTop: 60 }}
  >
    <div className="uk-container">
      <div
        className="uk-child-width-1-2@s uk-text-center uk-text-left@s"
        uk-grid=""
      >
        <div>
          <h3 className="uk-text-uppercase uk-text-small uk-text-muted">
            {COPYRIGHT}
          </h3>
          <div className="uk-panel">
            <p>{ABOUT}</p>
            <p>
              <a
                href={FACEBOOK_PAGE_LINK}
                className="facebook uk-icon-button  uk-margin-small-right"
                uk-icon="facebook"
                target="_blank"
              />
              <a
                href={TWITTER_PAGE_LINK}
                className="twitter uk-icon-button uk-margin-small-right"
                uk-icon="twitter"
                target="_blank"
              />
            </p>
          </div>
        </div>
        <div className="uk-text-capitalize">
          <h3 className="uk-text-uppercase uk-text-small uk-text-muted">
            menu
          </h3>
          <div className="uk-panel">
            <p className="uk-margin-remove-vertical">
              <a href="/about" className="uk-link-text">
                about us
              </a>
            </p>
            <p className="uk-margin-remove-vertical">
              <a href="/contact" className="uk-link-text">
                contact us
              </a>
            </p>
            <p className="uk-margin-remove-vertical">
              <a href="/advertise" className="uk-link-text">
                advertise
              </a>
            </p>
            <p className="uk-margin-remove-vertical">
              <a href="/terms" className="uk-link-text">
                terms &amp; conditions
              </a>
            </p>
            <p className="uk-margin-remove-vertical">
              <a href="/terms" className="uk-link-text">
                privacy policy
              </a>
            </p>
            <p className="uk-margin-remove-vertical">
              <a href="/help" className="uk-link-text">
                help
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
