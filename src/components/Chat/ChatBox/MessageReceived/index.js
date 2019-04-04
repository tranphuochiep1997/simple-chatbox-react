import React from 'react';
import './index.css';

const MessageReceived = ({ username, message }) => {
  return (
    <div className='message-received clearfix'>
      <div className='text-muted pl-2'>{ username }</div>
      <p className='float-left text-break bg-success text-white p-1 rounded'>
      {message}
      </p>
    </div>
  );
}

export default MessageReceived;
