import React from 'react';
import PropTypes from 'prop-types';

const Center = ({ children }) => (
  <div
    className="uk-flex uk-flex-center uk-flex-middle"
    uk-height-viewport="offset-bottom: 11.75" //offset top nav
  >
    {children}
  </div>
);

Center.PropTypes = {
  children: PropTypes.node.isRequired
};

export default Center;
