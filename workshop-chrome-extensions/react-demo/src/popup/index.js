import React from 'react';
import ReactDOM from 'react-dom/client';

import Popup from './Popup';

const rootDiv = document.createElement('div');
document.body.appendChild(rootDiv);

const root = ReactDOM.createRoot(rootDiv);
root.render(<Popup />);
