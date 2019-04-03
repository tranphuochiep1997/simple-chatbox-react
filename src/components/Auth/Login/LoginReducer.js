import { 
  LOGIN_DOING, 
  LOGIN_FAILURE, 
  LOGIN_SUCCESS, 
  CLEAR_LOGIN_ERROR 
} from './LoginAction';

const initialState = {
  loading: false,
  error: '',
  success: false
}

const loginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_DOING: {
      return {
        ...state,
        loading: true
      }
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true
      }
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error.message
      }
    }

    case CLEAR_LOGIN_ERROR: {
      return {
        ...state,
        error: ''
      }
    }

    default:
      return state;
  }
}

export default loginReducer;

