import {
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_ERROR
} from '../actions/register';

export const registrationState = {
    password: '',
    token: '',
    registrationRequest: false,
    registrationError: false
}

export const passwordResetReducer = (state = registrationState, action) => {
    switch (action.type) {
        case REGISTRATION_REQUEST: {
            return {
                ...state,
                registrationRequest: true,
            }
        }
        case REGISTRATION_SUCCESS: {
            return {
                ...state,
                registrationError: false,
                // email: "test-data@yandex.ru", 
                // password: "password", 
                // name: "Username" 
            }
        }
        case REGISTRATION_ERROR: {
            return {
                ...state,
                registrationRequest: false,
                registrationError: true
            }
        }
        default: {
            return state;
        }
    }
}
