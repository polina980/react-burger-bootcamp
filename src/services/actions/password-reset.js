import { apiBurger } from '../../utils/api';

export const PASSWORD_RESET_REQUEST = 'PASSWORD_RESET_REQUEST';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_ERROR = 'PASSWORD_RESET_ERROR';

export const passwordResetSuccess = (password, token) => ({
  type: PASSWORD_RESET_SUCCESS,
  password,
  token
})

export function confirmNewPassword(password, token) {
  return (dispatch) =>
    apiBurger.passwordResetRequest(password, token)
      .then((password, token) => {
        dispatch(passwordResetSuccess(password, token));
      })
      .catch((error) => {
        console.log(error)
      })
}
