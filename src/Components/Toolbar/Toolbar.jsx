import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/Logo.png'
import Select from '../Select/Select';
import Button from '../Button/Button';
import './Toolbar.css';

function Toolbar(props) {

  return (
    <header className='Toolbar'>
        <Row>
            <Col lg={4} md={4}><img src={logo} className='Logo' alt="Logo" /></Col>
            <Col lg={4} md={4}></Col>
            <Col lg={4} md={4}>
            <Row>
            <Col lg={6} md={10}>
                <Select value={props.value} onChange={props.onChange}/>
              </Col>
              <Col lg={6} md={2}>
                {props.homepage ? <Button size="lg" buttonText={"Organization"} onClick={props.onButtonClick}></Button> : ''}
              </Col>
              </Row>
            </Col>
        </Row>
    </header>
  );
}

export default Toolbar;