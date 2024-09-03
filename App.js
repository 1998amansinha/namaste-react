import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', {id: 'heading'}, "Namaste React")

const jsxHeading = <h1 id='heading2'>Namaste React using JSX</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(jsxHeading)