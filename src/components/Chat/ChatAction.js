import ChatService from './ChatService';

export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const receiveMessage = (message) => {
  return { type: MESSAGE_RECEIVED, payload: message }
}

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessage = (message) => {
  return { type: SEND_MESSAGE, payload: message }
}

export const GET_LIST_MESSAGES_DOING = 'GET_LIST_MESSAGES_DOING';
const getListMessagesDoing = () => {
  return { type: GET_LIST_MESSAGES_DOING }
}

export const GET_LIST_MESSAGES_SUCCESS = 'GET_LIST_MESSAGES_SUCCESS';
const getListMessagesSuccess = (messages) => {
  return { type: GET_LIST_MESSAGES_SUCCESS, payload: messages }
}

export const GET_LIST_MESSAGES_FAILURE = 'GET_LIST_MESSAGES_FAILURE';
const getListMessagesFail = (error) => {
  return { type: GET_LIST_MESSAGES_FAILURE, error }
}

export const getListMessages = () => {
  return async dispatch => {
    dispatch(getListMessagesDoing());

    return ChatService.getListMessages()
      .then(response => {
        if (response.success) {
          return dispatch(getListMessagesSuccess(response.result));
        }

        return dispatch(getListMessagesFail(response.error));
      })
  }
}
