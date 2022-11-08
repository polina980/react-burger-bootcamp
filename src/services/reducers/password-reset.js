import {
    PASSWORD_RESET_REQUEST,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_ERROR
} from '../actions/password-reset';

export const passwordResetState = {
    password: '',
    token: '',
    passwordResetRequest: false,
    passwordResetError: false
}

export const passwordResetReducer = (state = passwordResetState, action) => {
    switch (action.type) {
        case PASSWORD_RESET_REQUEST: {
            return {
                ...state,
                passwordResetRequest: true,
            }
        }
        case PASSWORD_RESET_SUCCESS: {
            return {
                ...state,
                passwordResetError: false,
                password: action.password,
                token: action.accessToken
            }
        }
        case PASSWORD_RESET_ERROR: {
            return {
                ...state,
                passwordResetRequest: false,
                passwordResetError: true
            }
        }
        default: {
            return state;
        }
    }
}
