import React from 'react';
import { Row, Col } from 'reactstrap';

const MessageSended = (props) => {
  return (
    <div>
      <Row>
        <Col >
          <span className='text-muted pr-2 float-right'>username</span>
        </Col>
      </Row >
      <Row >
        <Col lg={{ size: 6, offset: 6 }} md={{ size: 8, offset: 4 }}>
          <p className='float-right text-break bg-light text-dark font-weight-bold p-2 shadow rounded-lg'>fdsafdasfdasfdasfdasfasdfdasfasdfdasfdasfdasfdasfdasfdasfd
      asfdsafdsfdasfdasfdasfdasfdasfdasfadsfdasfdasfdasfdasfdasfdasfdsf
      fdasfdsfdasfdasfadsfdasfadsf</p>
        </Col >
      </Row >
    </div>
  );
}

export default MessageSended;
