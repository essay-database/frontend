import React from 'react';

// TODO no proptypes
export default ({ label, children }) => (
  <div className="uk-margin">
    <label className="uk-form-label">{label}</label>
    <div className="uk-form-controls">{children}</div>
  </div>
);
