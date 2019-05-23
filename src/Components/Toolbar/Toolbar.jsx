import React from 'react';
import logo from '../../assets/Logo.png'
import './Toolbar.css';

function Toolbar() {
  return (
    <header className='Toolbar'>
        <div>
            <img src={logo} className='Logo' alt="Logo" />
        </div>
        <nav className='DesktopOnly'>
            
        </nav>
    </header>
  );
}

export default Toolbar;