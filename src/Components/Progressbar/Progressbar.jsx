import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';  

import './Progressbar.css';

function Progressbar(props) {
    return (
        <div className='ProgressBarContainer'>
        <div className="ProgressHeader">Processing ...</div>
        <ProgressBar now={props.progressState} label={`60%`} ></ProgressBar>
        </div>
    );
}

export default Progressbar;