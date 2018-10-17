import React from 'react';
import PropTypes from 'prop-types';

const InputWrapper = ({ label, children }) => (
  <div className="uk-margin">
    <label className="uk-form-label">{label}</label>
    <div className="uk-form-controls">{children}</div>
  </div>
);

InputWrapper.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.number.isRequired
};

export default InputWrapper;
