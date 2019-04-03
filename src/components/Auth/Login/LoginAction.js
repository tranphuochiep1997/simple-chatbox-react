import AuthService from '../AuthService';
import Storage from '../../../utils/storage';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const loginSuccess = (result) => {

  /** Save token */
  Storage.setAccessToken(result.accessToken);
  return { type: LOGIN_SUCCESS }
}

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
const loginFail = (error) => {
  return { type: LOGIN_FAILURE, error }
}

export const LOGIN_DOING = 'LOGIN_DOING';
const loginDoing = () => {
  return { type: LOGIN_DOING }
}

export const login = ({ username, password }) => {
  return async dispatch => {

    dispatch(loginDoing());

    return AuthService.login({ username, password })
      .then(response => {
        if (response.success) {
          return dispatch(loginSuccess(response.result));
        }

        return dispatch(loginFail(response.error));
      })
  }
}

export const CLEAR_LOGIN_ERROR = 'CLEAR_LOGIN_ERROR';
export const clearLoginError = () => {
  return { type: CLEAR_LOGIN_ERROR }
}
