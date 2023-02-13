import React from "react";
import reactLogo from '../img/React-icon.png';


export default function Header() {
    return (
      <header>
        <nav className='nav-bar'>
          <img src={reactLogo} className='nav-logo' alt='React-logo'/>
          <ul className='nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header> 
    )
};