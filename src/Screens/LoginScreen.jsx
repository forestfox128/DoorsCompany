import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Toolbar from '../Components/Toolbar/Toolbar';
import Button from '../Components/Button/Button';
import FormInput from '../Components/FormInput/FormInput';
import CheckBox from '../Components/Checkbox/Checkbox';
import Progressbar from '../Components/Progressbar/Progressbar';
import ErrorMessage from '../Components/ErrorMessage/ErrorMessage';
import {authorizeUser} from '../services/api';

import '../styles/style.css';

class LoginScreen extends React.Component {

    state = {
        email: '',
        password: '',
        keepUserLogged: false,
        checkBox: false,
        showError: false,
        errorMessage: '',
        showProgressBar: false,
        progressState: 0
    }

    componentWillMount(){
        this.validateIsLogged()
        .then(isLogged => {
          if (isLogged)
              this.props.history.push('/home');
        });
    }

    validateIsLogged = async () => {
        const token = await localStorage.getItem('isLogged');
        const isLogged = token === 'logged';
        console.log(isLogged)
        return isLogged;
      }

    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    }
    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    }
    handleChangeCheckbox = event => {
        console.log(event.target.checked);
        this.setState({checkBox : event.target.checked});
    }

    handleErrorDismiss = () => {
        this.setState({ showError: false });
    }
    handleErrorShow = () => {
        this.setState({ showError: true });
    }

    tryAuthorize = async e => {
        e.preventDefault();
        const { username, password } = this.state;
        const token = await authorizeUser(username, password);
        setTimeout(() => {
            this.setState({showProgressBar: true});
            console.log("Tiem")
          }, 2000);
          this.setState({showProgressBar: false});
              if (token.status === 200) {
                  if(this.state.checkBox)
                    localStorage.setItem('isLogged', 'logged');
                  this.props.history.push('/home');
              } else {
                  if(token === 401)
                    this.setState({showError: true , errorMessage: 'Invalid username or password'})
                else this.setState({showError: true , errorMessage: 'A login error occured'})
              }   
      }

    render() {
        return (
            <div>
                
                <Toolbar />
                {this.state.showProgressBar ? <Progressbar progressState={40} /> : ''}
                {this.state.showError ? <ErrorMessage onClick={this.handleErrorDismiss} errorMessage={this.state.errorMessage}></ErrorMessage> : ''}
                <Container fluid={true} style={{ marginTop: '6em' }}>
                    <Row>
                        <Col lg={4} md={4}></Col>
                        <Col lg={4} md={4} style={{padding: '6em'}}>
                            <Form noValidate>
                                <Form.Label className="form-label">Log in</Form.Label>
                                <Form.Group controlId="formBasicEmail">
                                    <FormInput type={"email"} placeholder={"Enter email"} onChange={this.handleChangeEmail} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <FormInput type={"password"} placeholder={"Password"} onChange={this.handleChangePassword} />
                                </Form.Group>
                                <Form.Group controlId="formBasicChecbox" >
                                    <CheckBox checkboxLabel={"Keep me logged"} checked={this.state.checkBox}
                                    onChange={this.handleChangeCheckbox}></CheckBox>
                                </Form.Group>
                                <Button buttonText={"Zaloguj"} onClick={this.tryAuthorize}></Button>
                            </Form>

                        </Col>
                        <Col lg={4} md={4}></Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
}

export default LoginScreen;