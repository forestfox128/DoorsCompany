import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Toolbar from '../Components/Toolbar/Toolbar';
import Button from '../Components/Button/Button';
import FormInput from '../Components/FormInput/FormInput';
import {authorizeUser} from '../services/api';

class LoginScreen extends React.Component {

    state = {
        email: '',
        password: '',
        loginError: false,
        validated: false
    }

    async componentDidMount() {
        const token = await authorizeUser("xx", "xx");
        if (token) {
            console.log(token)
            this.props.history.push('/home');
        } else {
            this.setState({loginError: true})
        }
    }

    handleChangeEmail = event => {
        console.log(event.target.value);
        this.setState({ email: event.target.value });
    }
    handleChangePassword = event => {
        console.log(event.target.value);
        this.setState({ password: event.target.value });
    }

    handleSubmit = async event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });
        const { username, password } = this.state;
        const token = await authorizeUser(username, password);
              if (token) {
                   this.props.history.push('/home');
              } else {
                  this.setState({loginError: true})
              } 
    }

    render() {
        const { validated } = this.state;
        return (
            <div>
                <Toolbar />
                <Container fluid={true} style={{ marginTop: '15em' }}>
                    <Row>
                        <Col lg={4} md={4}></Col>
                        <Col lg={4} md={4}>
                            <Form noValidate
                                validated={validated}
                                onSubmit={e => this.handleSubmit(e)}>
                                <Form.Label>Log IN</Form.Label>
                                <Form.Group controlId="formBasicEmail">
                                    <FormInput type={"email"} placeholder={"Enter email"} onChange={this.handleChangeEmail} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">

                                    <FormInput type={"password"} placeholder={"Password"} onChange={this.handleChangePassword} />
                                </Form.Group>
                                <Form.Group controlId="formBasicChecbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button buttonText={"Zaloguj"} submit={"submit"}></Button>
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