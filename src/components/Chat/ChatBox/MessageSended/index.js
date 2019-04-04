import React from 'react';
import './index.css';

const MessageSended = ({ message }) => {
  return (
    <div className='message-sended clearfix'>
      <p className='float-right text-break bg-light text-dark p-1 rounded'>
      {message}
      </p>
    </div>
  );
}

export default MessageSended;
