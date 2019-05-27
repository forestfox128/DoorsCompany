import React from 'react';
import Alert from 'react-bootstrap/Alert';
import './ErrorMessage.css';

function ErrorMessage(props) {
  return (
    <header className='ErrorMessage'>
            <Alert variant="danger" onClose={props.onClick} dismissible>
          <Alert.Heading>{props.errorMessage}</Alert.Heading>
        </Alert>
        </header>
        
  );
}

export default ErrorMessage;