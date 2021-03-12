import React from 'react';
import ReactDOM from 'react-dom';

import Parent from 'components/Parent';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>,
  rootElement,
);
