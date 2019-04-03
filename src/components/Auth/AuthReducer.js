import { 
  AUTHENTICATE_FAILURE, 
  AUTHENTICATE_SUCCESS
} from './AuthAction';

const initialState = {
  waiting: true,
  error: '',
  authenticated: false,
  user: null
}

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTHENTICATE_SUCCESS: {
      return {
        ...state,
        waiting: false,
        authenticated: true,
        user: action.payload
      }
    }

    case AUTHENTICATE_FAILURE: {
      return {
        ...state,
        waiting: false,
        authenticated: false,
        error: action.error.message
      }
    }

    default:
      return state;
  }
}

export default authReducer;
