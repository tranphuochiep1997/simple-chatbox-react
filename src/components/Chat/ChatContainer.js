import React, { useEffect } from 'react';
import ChatBox from './ChatBox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getListMessages, sendMessage } from './ChatAction';

const ChatContainer = (props) => {

  useEffect(() => {
    props.getListMessages();
  }, []);

  return (
    <ChatBox 
      sendMessage={props.sendMessage} 
      messages={props.messages} 
      loading={props.loading} 
      error={props.error}
      currentUser={props.currentUser}/>
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
