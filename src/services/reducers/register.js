import {
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_ERROR
} from '../actions/register';

export const registrationState = {
    name: '',
    email: '',
    password: '',
    registrationRequest: false,
    registrationError: false
}

export const registrationReducer = (state = registrationState, action) => {
    switch (action.type) {
        case REGISTRATION_REQUEST: {
            return {
                ...state,
                registrationRequest: true,
                registrationError: false,
            }
        }
        case REGISTRATION_SUCCESS: {
            return {
                ...state,
                registrationError: false,
                name: action.username,
                email: action.email,
                password: action.password
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
