import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import config from 'react-global-configuration';
import configuration from '../config.js';
import './static/css/bootstrap.min.css';
import './static/css/font-awesome.min.css';
import './index.scss';
import App from './App';

config.set(configuration);

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
