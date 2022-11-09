import { apiBurger } from '../../utils/api';

export const PASSWORD_FORGOT_REQUEST = 'PASSWORD_FORGOT_REQUEST';
export const PASSWORD_FORGOT_SUCCESS = 'PASSWORD_FORGOT_SUCCESS';
export const PASSWORD_FORGOT_ERROR = 'PASSWORD_FORGOT_ERROR';

export const passwordForgotSuccess = (email) => ({
  type: PASSWORD_FORGOT_SUCCESS,
  email
  // success: true,
  // message: 'Reset email sent'
})
