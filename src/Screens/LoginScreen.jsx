import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from '../Components/Button/Button';
import FormInput from '../Components/FormInput/FormInput';
import CheckBox from '../Components/Checkbox/Checkbox';
import Progressbar from '../Components/Progressbar/Progressbar';
import ErrorMessage from '../Components/ErrorMessage/ErrorMessage';
import {authorizeUser} from '../services/api';
import { injectIntl } from 'react-intl';
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
        progressState: 0,
    }

    componentWillMount(){
        this.validateIsLogged()
        .then(isLogged => {
          if (isLogged)
              this.props.history.push('/home');
        });
    }
    componentWillUnmount() {
        clearInterval(this.progressInterval);
      }

    validateIsLogged = async () => {
        const token = await localStorage.getItem('isLogged');
        const isLogged = token === 'logged';
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


    showProgress () {
        this.setState({showProgressBar: true});
        let x = 10
        this.progressInterval = setInterval(
            () => this.setState({progressState: x += 10}),
            100
          );   
    }
    tryAuthorize = async e => {
        e.preventDefault();
        const { email, password } = this.state; 
        setTimeout(this.showProgress(), 2000);
        const token = await authorizeUser(email, password);
        
            this.setState({showProgressBar: false});
            if (token.status === 200) {
                if(this.state.checkBox)
                    localStorage.setItem('isLogged', 'logged');
                else
                    localStorage.setItem('isLogged', 'logout');
                  this.props.history.push('/home');
            } else {
                if(token === 401)
                  this.setState({showError: true , errorMessage: 'Invalid username or password'})
              else this.setState({showError: true , errorMessage: 'A login error occured'})
            }          
      }

    render() {
        const { intl } = this.props;
        const emailText = intl.formatMessage({ id: 'email.placeholder' });
        const passwordText = intl.formatMessage({ id: 'password.placeholder' });
        const loginText = intl.formatMessage({ id: 'login.text' });
        const buttonLoginText = intl.formatMessage({ id: 'login.button.text' });
        const checkBoxText = intl.formatMessage({ id: 'checkbox.text' });
        return (
            <div> 
                
                {this.state.showProgressBar ? <Progressbar progressState={this.state.progressState} /> : ''}
                {this.state.showError ? <ErrorMessage onClick={this.handleErrorDismiss} errorMessage={this.state.errorMessage}></ErrorMessage> : ''}
                <Container fluid={true} style={{ marginTop: '6em' }}>
                    <Row>
                        <Col lg={4} md={4}></Col>
                        <Col lg={4} md={4} style={{padding: '6em'}}>
                            <Form noValidate>
                                <Form.Label className="form-label">{loginText}</Form.Label>
                                <Form.Group controlId="formBasicEmail">
                                    <FormInput type={"email"} placeholder={emailText} onChange={this.handleChangeEmail} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <FormInput type={"password"} placeholder={passwordText} onChange={this.handleChangePassword} />
                                </Form.Group>
                                <Form.Group controlId="formBasicChecbox" >
                                    <CheckBox checkboxLabel={checkBoxText} checked={this.state.checkBox}
                                    onChange={this.handleChangeCheckbox}></CheckBox>
                                </Form.Group>
                                <Button buttonText={buttonLoginText} onClick={this.tryAuthorize} size={"xxl"}></Button>
                            </Form>

                        </Col>
                        <Col lg={4} md={4}></Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
}

export default injectIntl(LoginScreen);