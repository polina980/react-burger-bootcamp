import { apiBurger } from '../../utils/api';

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';

export const registrationSuccess = (username, email, password) => ({
  type: REGISTRATION_SUCCESS,
  username,
  email,
  password
})

export function createNewAccount(username, email, password) {
  return (dispatch) =>
    apiBurger.registerRequest(username, email, password)
      .then(({ name: { username }, email: { email }, password: { password } }) => {
        dispatch(registrationSuccess(username, email, password));
      })
      .catch((error) => {
        console.log(error)
      })
}
