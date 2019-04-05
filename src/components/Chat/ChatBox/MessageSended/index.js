import React from 'react';

const MessageSended = ({ message }) => {
  return (
    <div className='message d-inline-block w-100'>
      <p className='float-right text-break bg-light text-dark p-1 rounded'>
      {message}
      </p>
    </div>
  );
}

export default MessageSended;
