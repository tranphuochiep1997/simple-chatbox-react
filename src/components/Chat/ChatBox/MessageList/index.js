import React from 'react';
import MessageReceived from '../MessageReceived';
import MessageSended from '../MessageSended';

const MessageList = ({ messages, currentUser }) => {
  return (
    <div className='px-2' style={{overflow: 'auto', height: '100%'}}>
      {
        messages.map(message => {
          if (message.ownerId === currentUser.id) {
            return <MessageSended
              key={message.id}
              message={message.body} />
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
