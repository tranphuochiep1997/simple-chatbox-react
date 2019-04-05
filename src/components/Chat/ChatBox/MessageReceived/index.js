import React from 'react';

const MessageReceived = ({ username, message }) => {
  return (
    <div className='message d-inline-block w-100'>
      <div className='text-muted pl-2'>{ username }</div>
      <p className='float-left text-break bg-success text-white p-1 rounded'>
      {message}
      </p>
    </div>
  );
}

export default MessageReceived;
