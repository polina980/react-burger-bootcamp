import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from '../actions/logout';

export const initialState = {
  token: '',
  userLogoutRequest: false,
  userLogoutError: false
}

export const userLogoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST: {
      return {
        ...state,
        userLogoutRequest: true,
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        userLogoutRequest: true,
        userLogoutError: false,
        token: action.payload.refreshToken,
      }
    }
    case LOGOUT_ERROR: {
      return {
        ...state,
        userLogoutRequest: false,
        userLogoutError: true
      }
    }
    default: {
      return state;
    }
  }
}
