import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './views/login/index'
import {HashRouter,BrowserRouter,Route } from 'react-router-dom';



const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter

ReactDOM.render(
  
  <Router>
 
    <App />
    
  </Router>,

    document.getElementById('root')
);


