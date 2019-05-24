import React from 'react';
import Form from 'react-bootstrap/Form';
import './FormInput.css'

function FormInput(props) {
    return (
        <Form.Control type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
    );
  }

export default FormInput;