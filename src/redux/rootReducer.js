import { combineReducers } from 'redux';
import registerReducer from '../components/Auth/Register/RegisterReducer';
import authReducer from '../components/Auth/AuthReducer';
import chatReducer from '../components/Chat/ChatReducer';

const rootReducer = combineReducers({
  registerReducer,
  authReducer,
  chatReducer
});

export default rootReducer;

