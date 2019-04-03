import AuthService from '../AuthService';
import { toast } from 'react-toastify';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const registerSuccess = () => {
  toast.success('Register success');
  return { type: REGISTER_SUCCESS }
}

export const REGISTER_FAILURE = 'REGISTER_FAILURE';
const registerFail = (error) => {
  return { type: REGISTER_FAILURE, error }
}

export const REGISTER_DOING = 'REGISTER_DOING';
const registerDoing = () => {
  return { type: REGISTER_DOING }
}

export const CLEAR_REGISTER_ERROR = 'CLEAR_REGISTER_ERROR';
export const clearRegisterError = () => {
  return { type: CLEAR_REGISTER_ERROR }
}

export const register = ({ username, password, confirmPassword }) => {
  return async dispatch => {
    dispatch(registerDoing());

    if (password !== confirmPassword) {
      return dispatch(registerFail({
        message: 'PASSWORD_NOT_MATCH'
      }))
    }

    return AuthService.register({ username, password })
      .then(response => {
        if (response.success) {
          return dispatch(registerSuccess(response.result));
        }

        return dispatch(registerFail(response.error));
      })
  }
}
