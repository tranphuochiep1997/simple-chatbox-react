import React from 'react';
import MessageReceived from '../MessageReceived';
import MessageSended from '../MessageSended';

const MessageList = ({ messages, currentUser }) => {
  return (
    <div className='flex-fill d-flex flex-column justify-content-end px-2'>
    {
      messages.map(message => {
        if(message.ownerId === currentUser.id) {
          return <MessageSended 
            key={message.id}
            message={message.body}/>
        }

        return <MessageReceived 
          key={message.id}
          username={message.owner.username} 
          message={message.body} />
      })
    }
    </div>
  );
}

export default MessageList;
