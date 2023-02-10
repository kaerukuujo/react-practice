import React from 'react';
import ReactDOM from 'react-dom/client';
import reactLogo from './img/React-icon.png';
const page = (
  <div>
    <img src={reactLogo} width='100px' alt='react-logo' className='img'/>  
    <h1> Fun facts about React </h1>
    <ul>
      <li>Was first created in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k starts on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including <br/> 
      mobile apps</li>  
    </ul>
  </div>  
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(page);