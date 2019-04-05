import React, { useEffect } from 'react';
import ChatBox from './ChatBox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getListMessages, sendMessage } from './ChatAction';
import { Container, Row, Col } from 'reactstrap';

const ChatContainer = (props) => {

  useEffect(() => {
    props.getListMessages();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <ChatBox
            sendMessage={props.sendMessage}
            messages={props.messages}
            loading={props.loading}
            error={props.error}
            currentUser={props.currentUser} />
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    messages: state.chatReducer.messages,
    loading: state.chatReducer.loading,
    error: state.chatReducer.error,
    currentUser: state.authReducer.user
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getListMessages,
    sendMessage
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
