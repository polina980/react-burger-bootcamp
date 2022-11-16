import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../actions/login';

export const initialState = {
  email: '',
  password: '',
  getLoginRequest: false,
  getLoginError: false
}

export const getLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        getLoginRequest: true,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        getLoginRequest: true,
        getLoginError: false,
        email: action.payload.email,
        password: action.payload.password,
        success: action.payload.success
      }
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        getLoginRequest: false,
        getLoginError: true
      }
    }
    default: {
      return state;
    }
  }
}
