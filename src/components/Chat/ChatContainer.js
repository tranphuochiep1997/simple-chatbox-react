import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ChatBox from './ChatBox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getListMessages, sendMessage } from './ChatAction';

const ChatContainer = (props) => {

  useEffect(() => {
    getListMessages();
  }, []);

  return (
    <Container>
      <Row className='h-100'>
        <Col>
          <ChatBox 
            sendMessage={props.sendMessage} 
            messages={props.messages} 
            loading={props.loading} 
            error={props.error}/>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    messages: state.chatReducer.messages,
    loading: state.chatReducer.loading,
    error: state.chatReducer.error
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getListMessages,
    sendMessage
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
