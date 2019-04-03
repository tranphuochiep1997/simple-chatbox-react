import Storage from '../../utils/storage';
import AuthService from './AuthService';

export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS';
const authenticateSuccess = (result) => {
  return { type: AUTHENTICATE_SUCCESS, payload: result }
}

export const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE';
const authenticateFail = (error) => {
  if (error.message === ('INVALID_TOKEN' || 'TOKEN_EXPIRED_ERROR')) {
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