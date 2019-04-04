import React from 'react';
import { Row, Col } from 'reactstrap';

const MessageReceived = ({ username, message }) => {
  return (
    <div>
      <Row>
        <Col >
          <span className='text-muted pl-2'>{ username }</span>
        </Col>
      </Row >
      <Row >
        <Col lg='6' md='8'>
          <p className='text-break bg-secondary text-white font-weight-bold p-2 shadow rounded-lg'>fdsafdasfdasfdasfdasfasdfdasfasdfdasfdasfdasfdasfdasfdasfd
      asfdsafdsfdasfdasfdasfdasfdasfdasfadsfdasfdasfdasfdasfdasfdasfdsf
      fdasfdsfdasfdasfadsfdasfadsf</p>
        </Col >
      </Row >
    </div>
  );
}

export default MessageReceived;
