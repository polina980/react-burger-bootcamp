import { apiBurger } from '../../utils/api';
import { deleteCookie } from '../../utils/cookie'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const logoutSuccess = (payload) => ({
  type: LOGOUT_SUCCESS,
  payload
})

export function userLogout() {
  return (dispatch) =>
    apiBurger.logoutRequest()
      .then((payload) => {
        dispatch(logoutSuccess(payload));
        // deleteCookie('access');
        deleteCookie('refresh')
      })
      .catch((error) => {
        console.log(error)
      })
}
