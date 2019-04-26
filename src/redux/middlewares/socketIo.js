import { AUTHENTICATE_SUCCESS } from '../../components/Auth/AuthAction';
import { Env } from '../../utils/config';
import Storage from '../../utils/storage';
import { toast } from 'react-toastify';
import { 
  receiveMessage, 
  SEND_MESSAGE
} from '../../components/Chat/ChatAction';

const eventSocket = {
  MESSAGE: 'message',
  ERROR: 'error'
}

const createSocket = () => {
  const io = require('socket.io-client');
  return io(Env.SOCKET_API, {
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

        socket.on(eventSocket.ERROR, (response) => {
          response = JSON.parse(response);
          toast.error(response.error.message);
        });

        break;
      }

      case SEND_MESSAGE: {
        socket.emit(eventSocket.MESSAGE, action.payload);
        break;
      }
      
      default: 
    }

    return next(action);
  }
}

export default socketIo;

