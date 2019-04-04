import React from 'react';
import FormInput from './FormInput';
import Title from './Title';
import MessageList from './MessageList';

const ChatBox = (props) => {
  return (
    <div className='h-100 d-flex flex-column py-5'>
      <Title />
      <MessageList />
      <FormInput />
    </div>
  );
}

export default ChatBox;
