import {
  MESSAGE_RECEIVED,
  GET_LIST_MESSAGES_SUCCESS,
  GET_LIST_MESSAGES_DOING,
  GET_LIST_MESSAGES_FAILURE
} from './ChatAction';

const initialState = {
  loading: false,
  error: '',
  messages: []
}

const chatReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MESSAGE_RECEIVED: {
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    }

    case GET_LIST_MESSAGES_DOING: {
      return {
        ...state,
        loading: true
      }
    }

    case GET_LIST_MESSAGES_SUCCESS: {
      return {
        ...state,
        messages: action.payload
      }
    }

    case GET_LIST_MESSAGES_FAILURE: {
      return {
        ...state,
        error: action.error.message
      }
    }

    default:
      return state;
  }
}

export default chatReducer;

