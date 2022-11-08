import {
    PASSWORD_FORGOT_REQUEST,
    PASSWORD_FORGOT_SUCCESS,
    PASSWORD_FORGOT_ERROR
} from '../actions/password-forgot';

export const passwordForgotState = {
    email: '',
    passwordForgotRequest: false,
    passwordForgotError: false
}

export const passwordForgotReducer = (state = passwordForgotState, action) => {
    switch (action.type) {
      case PASSWORD_FORGOT_REQUEST: {
        return {
          ...state,
          passwordForgotRequest: true,
        }
      }
      case PASSWORD_FORGOT_SUCCESS: {
        return {
          ...state,
          passwordForgotError: false,
         email: action.email
        }
      }
      case PASSWORD_FORGOT_ERROR: {
        return {
          ...state,
          passwordForgotRequest: false,
          passwordForgotError: true
        }
      }
      default: {
        return state;
      }
    }
  }
  