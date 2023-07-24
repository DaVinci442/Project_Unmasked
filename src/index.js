import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Advice from './pages/Advice/Advice';
import Contact from './pages/Contact/Contact';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';

ReactDOM.render( <
    Router >
    <
    Routes >
    <
    Route path = '/'
    element = { < App / > }
    /> <
    Route path = '/about'
    element = { < About / > }
    /> <
    Route path = '/Services'
    element = { < Services / > }
    /> <
    Route path = '/Advice'
    element = { < Advice / > }
    /> <
    Route path = '/Contact'
    element = { < Contact / > }
    /> <
    Route path = '/Signup'
    element = { < Signup / > }
    /> <
    Route path = '/Signin'
    element = { < Signin / > }
    />

    <
    /Routes> <
    /Router>, 

    document.getElementById('root')
);