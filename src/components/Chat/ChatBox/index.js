import React from 'react';
import FormInput from './FormInput';
import Title from './Title';
import MessageList from './MessageList';
import './index.css';

const ChatBox = ({ messages, loading, sendMessage, currentUser }) => {
  return (
    <div className='chatbox d-flex flex-column border'>
      <Title loading={loading} />
      <MessageList messages={messages} currentUser={currentUser}/>
      <FormInput sendMessage={sendMessage}/>
    </div>
  );
}

export default ChatBox;
