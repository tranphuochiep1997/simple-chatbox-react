import { combineReducers } from 'redux';
import loginReducer from '../components/Auth/Login/LoginReducer';
import registerReducer from '../components/Auth/Register/RegisterReducer';

const rootReducer = combineReducers({
  loginReducer,
  registerReducer
});

export default rootReducer;

