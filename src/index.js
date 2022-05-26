import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card.js';
import CardList from './CardList.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; //styling and animation framework for js and react comonents
import {robots} from './Robots.js'; //import Robot objects 
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
     
  </React.StrictMode>
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
