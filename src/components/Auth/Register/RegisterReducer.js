import { 
  REGISTER_DOING, 
  REGISTER_FAILURE, 
  REGISTER_SUCCESS, 
  CLEAR_REGISTER_ERROR 
} from './RegisterAction';

const initialState = {
  loading: false,
  error: '',
  success: false
}

const registerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTER_DOING: {
      return {
        ...state,
        loading: true
      }
    }

    case REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true
      }
    }

    case REGISTER_FAILURE: {
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error.message
      }
    }

    case CLEAR_REGISTER_ERROR: {
      return {
        ...state,
        error: ''
      }
    }

    default:
      return state;
  }
}

export default registerReducer;

