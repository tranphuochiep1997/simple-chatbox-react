import React from 'react';
import MessageReceived from '../MessageReceived';
import MessageSended from '../MessageSended';

const MessageList = (props) => {
  return (
    <div className='flex-fill d-flex flex-column justify-content-end px-2'>
      <MessageReceived />
      <MessageSended />
    </div>
  );
}

export default MessageList;
