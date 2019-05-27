import React from 'react';
import logo from '../../assets/Logo.png'
import Select from '../Select/Select';
import './Toolbar.css';

function Toolbar() {
  return (
    <header className='Toolbar'>
        <div>
            <img src={logo} className='Logo' alt="Logo" />
        </div>
    </header>
  );
}

export default Toolbar;