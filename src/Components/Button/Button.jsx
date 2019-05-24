import React from 'react';
import Button from 'react-bootstrap/Button';
import './Button.css'

function Buttons(props) {
    return (
        <Button variant="flat" size="xxl" type={props.submit}>{props.buttonText}</Button>
    );
  }

export default Buttons;