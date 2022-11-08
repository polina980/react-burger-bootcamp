import { apiBurger } from '../../utils/api';

export const PASSWORD_RESET_REQUEST = 'PASSWORD_RESET_REQUEST';
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS';
export const PASSWORD_RESET_ERROR = 'PASSWORD_RESET_ERROR';

export const passwordResetSuccess = () => ({
  type: PASSWORD_RESET_SUCCESS,
  password,
  accessToken
  // success: true,
  // message: 'Password successfully reset'
})
