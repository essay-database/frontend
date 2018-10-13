import React from 'react';

export default ({ children }) => (
  <div
    className="uk-flex uk-flex-center uk-flex-middle"
    uk-height-viewport="offset-bottom: 11.75" // offset top nav
  >
    {children}
  </div>
);
