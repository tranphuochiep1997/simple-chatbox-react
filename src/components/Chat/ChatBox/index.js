import React from 'react';
import FormInput from './FormInput';
import Title from './Title';
import MessageList from './MessageList';

const ChatBox = ({ messages, loading, sendMessage }) => {
  return (
    <div className='h-100 d-flex flex-column py-5'>
      <Title loading={loading} />
      <MessageList messages={messages}/>
      <FormInput sendMessage={sendMessage}/>
    </div>
  );
}

export default ChatBox;
