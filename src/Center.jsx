import React from "react";
import PropTypes from "prop-types";

const Center = ({ children }) => (
  <div
    className="uk-flex uk-flex-center uk-flex-middle"
    uk-height-viewport="expand: true;"
  >
    {children}
  </div>
);

Center.propTypes = {
  children: PropTypes.node.isRequired
};

export default Center;
