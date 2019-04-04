import { AUTHENTICATE_SUCCESS } from '../../components/Auth/AuthAction';
import { SOCKET_API } from '../../utils/config';
import Storage from '../../utils/storage';
import { 
  receiveMessage, 
  SEND_MESSAGE
} from '../../components/Chat/ChatAction';

const eventSocket = {
  MESSAGE: 'message'
}

const createSocket = () => {
  const io = require('socket.io-client');
  return io(SOCKET_API, {
    query: {
      accessToken: Storage.getAccessToken()
    }
  });
}

const socketIo = () => {
  let socket;

  return store => next => action => {
    switch(action.type) {
      case AUTHENTICATE_SUCCESS: {
        socket = createSocket();

        socket.on(eventSocket.MESSAGE, (message) => {
          store.dispatch(receiveMessage(message));
        });

        break;
      }

      case SEND_MESSAGE: {
        socket.emit(eventSocket.MESSAGE);
        break;
      }
      
      default: 
    }

    return next(action);
  }
}

export default socketIo;

