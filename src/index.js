import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import ErrorBoundary from './ErrorBoundary';
import App from './App';

const AppContainer = (
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>{' '}
  </StrictMode>
);

render(AppContainer, document.getElementById('root'));
