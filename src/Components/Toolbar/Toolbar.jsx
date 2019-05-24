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
        <div style={{paddingTop: '1.3em', paddingRight: '17em'}}>
        </div>
    </header>
  );
}

export default Toolbar;