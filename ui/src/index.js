import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './pages/app';

console.log('in index.js');
const rootElement = document.createElement('root');
ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    rootElement
);
