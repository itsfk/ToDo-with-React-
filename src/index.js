import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import Routing from './Routing';
ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
