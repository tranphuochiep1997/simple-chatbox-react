import React from 'react';

const Chat = React.lazy(() => import('./components/Chat/ChatContainer'));

const routes = [
  { path: '/', component: Chat, name: 'Chat', exact: false }
];

export default routes;

