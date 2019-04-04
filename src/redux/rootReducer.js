import { combineReducers } from 'redux';
import loginReducer from '../components/Auth/Login/LoginReducer';
import registerReducer from '../components/Auth/Register/RegisterReducer';
import authReducer from '../components/Auth/AuthReducer';
import chatReducer from '../components/Chat/ChatReducer';

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  authReducer,
  chatReducer
});

export default rootReducer;

