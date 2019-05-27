import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';  

import './Progressbar.css';

function Progressbar(props) {
    return (
        <ProgressBar now={60} label={`60%`} ></ProgressBar>
    );
}

export default Progressbar;