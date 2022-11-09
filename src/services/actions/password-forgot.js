import { apiBurger } from '../../utils/api';

export const PASSWORD_FORGOT_REQUEST = 'PASSWORD_FORGOT_REQUEST';
export const PASSWORD_FORGOT_SUCCESS = 'PASSWORD_FORGOT_SUCCESS';
export const PASSWORD_FORGOT_ERROR = 'PASSWORD_FORGOT_ERROR';

export const passwordForgotSuccess = (email) => ({
  type: PASSWORD_FORGOT_SUCCESS,
  email
})

export function createNewPassword(email) {
  return (dispatch) =>
    apiBurger.passwordForgotRequest(email)
      .then((email) => {
        dispatch(passwordForgotSuccess(email));
      })
      .catch((error) => {
        console.log(error)
      })
}
