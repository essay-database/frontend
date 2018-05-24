import React from "react";
import { render } from "react-dom";

import ErrorBoundary from "./ErrorBoundary";

import App from "./App";

const AppContainer = (
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

render(AppContainer, document.getElementById("root"));
