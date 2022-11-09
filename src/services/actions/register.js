import { apiBurger } from '../../utils/api';

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';

export const registrationSuccess = (name, email, password) => ({
  type: REGISTRATION_SUCCESS,
  name,
  email,
  password
})

export function createNewAccount(name, email, password) {
  return (dispatch) =>
    apiBurger.registerRequest(name, email, password)
      .then((name, email, password) => {
        dispatch(registrationSuccess(name, email, password));
      })
      .catch((error) => {
        console.log(error)
      })
}
