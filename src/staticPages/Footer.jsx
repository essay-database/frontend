import React from 'react';

export default () => (
  <footer class="uk-section uk-section-large uk-section-secondary uk-light">
    <div class="uk-container">
      <div class="uk-child-width-1-2@s" uk-grid="">
        <div>
          <h3 className="uk-text-uppercase uk-text-small">
            &copy; essay database 2018
          </h3>
          <div class="uk-panel">
            <p>
              Compiling a global collection of college application essays and
              personal statements.
            </p>
            <p>
              <a
                href="www.twitter.com/essaydatabase"
                class="uk-icon-button uk-margin-small-right"
                uk-icon="twitter"
              />
              <a
                href="www.facebook.com/essaydatabase"
                class="uk-icon-button  uk-margin-small-right"
                uk-icon="facebook"
              />
              <a
                href="www.linkedin.com/in/essaydatabase"
                class="uk-icon-button"
                uk-icon="linkedin"
              />
            </p>
          </div>
        </div>
        <div className="uk-text-capitalize">
          <h3 className="uk-text-uppercase uk-text-small">menu</h3>
          <div class="uk-panel">
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
