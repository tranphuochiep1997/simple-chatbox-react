import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ChatBox from './ChatBox';

const ChatContainer = () => {
  return (
    <Container>
      <Row className='h-100'>
        <Col>
          <ChatBox />
        </Col>
      </Row>
    </Container>
  );
}

export default ChatContainer;
