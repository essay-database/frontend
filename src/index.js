import React, { StrictMode } from "react";
import { render } from "react-dom";
import ErrorBoundary from "./ErrorBoundary";
import App from "./App";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.min.css";

UIkit.use(Icons);
window.UIkit = UIkit;

const AppContainer = (
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);

render(AppContainer, document.getElementById("root"));
