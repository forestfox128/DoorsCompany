import React from 'react';
import Form from 'react-bootstrap/Form';
import './Checkbox.css';

function Checkbox(props) {
    return (
        <Form.Check type="checkbox" label={props.checkboxLabel} />
    );
}

export default Checkbox;