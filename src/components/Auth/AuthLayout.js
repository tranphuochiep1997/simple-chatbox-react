import React from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';

const AuthLayout = ({ children, errorMessage }) => {
  return (
    <div className='app'>
      <Container>
        <Row className='justify-content-center'>
          <Col md='auto'>
            <Row>
              <Col>
                {errorMessage && <Alert color='danger'>{errorMessage}</Alert>}
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 className='mb-3'>Welcome to simple chatbox!</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                {children}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AuthLayout;
