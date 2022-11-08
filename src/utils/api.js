export const apiConfig = {
  baseUrl: `https://norma.nomoreparties.space/api`,
  ingredients: '/ingredients',
  order: '/orders',
  autorisation: '/auth/login',
  register: '/auth/register',
  logout: '/auth/logout',
  token: '/auth/token',
  passwordForgot: '/password-reset',
  passwordReset: '/password-reset/reset',
  defaultHeaders: {
    'Content-Type': 'application/json'
  }
}

class Api {
  constructor({ baseUrl, ingredients, order, autorisation, register, logout, token, passwordForgot, passwordReset, defaultHeaders }) {
    this._baseUrl = baseUrl;
    this._ingredientsEndpoint = ingredients;
    this._orderEndpoint = order;
    this._autorisationEndpoint = autorisation;
    this._registerEndroint = register;
    this._logoutEndpoint = logout;
    this._tokenEndpoint = token;
    this._passwordForgotEndpoint = passwordForgot;
    this._passwordResetEndpoint = passwordReset;
    this._defaultHeaders = defaultHeaders;
  }

  _makeUrl(endpoint) {
    return `${this._baseUrl}${endpoint}`;
  }

  _request(url, options) {
    return fetch(url, options).then(this._handleResponse)
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getIngredients() {
    const options = {
      method: 'GET',
      headers: this._defaultHeaders
    }
    return this._request(this._makeUrl(this._ingredientsEndpoint), options)
  }

  requestOrderDetails(idList) {
    const options = {
      method: 'POST',
      headers: this._defaultHeaders,
      body: JSON.stringify({
        ingredients: idList
      })
    }
    return this._request(this._makeUrl(this._orderEndpoint), options)
  }
}

export const apiBurger = new Api(apiConfig);
