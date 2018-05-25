import React from "react";
// no render
export default ({ label, children }) => (
  <div className="uk-margin">
    <label className="uk-form-label">{label}</label>
    <div className="uk-form-controls">{children}</div>
  </div>
);
