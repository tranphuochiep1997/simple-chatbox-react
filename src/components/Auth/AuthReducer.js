import {
  AUTHENTICATE_FAILURE,
  AUTHENTICATE_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_DOING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLEAR_ERROR
} from './AuthAction';

const initialState = {
  waiting: true,
  error: '',
  loading: false,
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
        authenticated: false
      }
    }

    case LOGIN_DOING: {
      return {
        ...state,
        loading: true
      }
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error.message
      }
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        waiting: false,
        authenticated: true,
        loading: false,
        user: action.payload.user
      }
    }

    case LOGOUT_SUCCESS: {
      return initialState;
    }

    case CLEAR_ERROR: {
      return {
        ...state,
        error: ''
      }
    }

    default:
      return state;
  }
}

export default authReducer;

