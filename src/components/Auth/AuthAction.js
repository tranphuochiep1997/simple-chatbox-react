import Storage from '../../utils/storage';
import AuthService from './AuthService';

/** Authentication action */
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
const authenticateSuccess = (result) => {
  return { type: AUTHENTICATE_SUCCESS, payload: result }
}

export const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE';
const authenticateFail = (error) => {
  if (['INVALID_TOKEN', 'TOKEN_EXPIRED_ERROR'].includes(error.message)) {
    Storage.deleteAccessToken();
  }

  return { type: AUTHENTICATE_FAILURE, error }
}

export const authenticate = () => {
  return async dispatch => {

    const accessToken = Storage.getAccessToken();
    if (!accessToken) {
      return dispatch(authenticateFail({
        message: 'NOT_AUTHENTICATED_ERROR'
      }));
    }

    return AuthService.getCurrentUserInfo()
      .then(response => {
        if (response.success) {
          return dispatch(authenticateSuccess(response.result));
        }

        return dispatch(authenticateFail(response.error));
      })
  }
}

/** Login action */
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const loginSuccess = (result) => {

  /** Save token */
  Storage.setAccessToken(result.accessToken);
  return { type: LOGIN_SUCCESS, payload: result }
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

/** Logout action */
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logout = () => {
  Storage.clear();
  return { type: LOGOUT_SUCCESS }
}

/** Clear error */
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const clearError = () => {
  return { type: CLEAR_ERROR }
}
