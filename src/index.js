import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './Hello.js';    //import App from './App.js'  importing component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello />        
  </React.StrictMode>
);   //Was changed to <Hello /> before was <App />  displaying own component

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
