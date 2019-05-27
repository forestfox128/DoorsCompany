import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Stepper from 'react-stepper-horizontal';
class HomeScreen extends React.Component {

    state = {
        currentStep: 0,
    }

    render() {
        return (
            <div>
            <Container fluid={true} style={{ marginTop: '6em' }}>
                    <Row>
                        <Col lg={4} md={4}></Col>
                        <Col lg={4} md={4}>
                            <Stepper steps={ [{title: 'Step 1'}, {title: 'Step 2'}, {title: 'Step 3'}] } activeStep={ this.state.currentStep }
                             defaultColor={"#CDDBE5"}
                             activeColor={"#95A3AD"}
                             defaultTitleColor={"#848C93"}
                             titleFontSize={"10px"}
                             />
                        </Col>
                        <Col lg={4} md={4}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HomeScreen;