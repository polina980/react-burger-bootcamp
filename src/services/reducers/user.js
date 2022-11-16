import {
  GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_ERROR,
  PATCH_USER_REQUEST, PATCH_USER_SUCCESS, PATCH_USER_ERROR
} from "../actions/user";

const initialState = {
  success: false,
  user: {
    email: '',
    name: ''
  },
};

export const getUserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST: {
      return {

      }
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        success: action.payload.success,
        user: action.payload.user,
      }
    }
    case GET_USER_ERROR: {
      return {

      }
    }
    case PATCH_USER_REQUEST: {
      return {

      }
    }
    case PATCH_USER_SUCCESS: {
      return {
        ...state,
        success: action.payload.success,
        user: action.payload.user,
      }
    }
    case PATCH_USER_ERROR: {
      return {

      }
    }
    default: {
      return state;
    }
  }
}
