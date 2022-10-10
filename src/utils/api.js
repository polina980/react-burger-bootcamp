import { apiConfig } from '../burger.config';

class Api {
  constructor({ baseUrl, ingredients, defaultHeaders }) {
    this._baseUrl = baseUrl;
    this._ingredientsEndpoint = ingredients;
    this._defaultHeaders = defaultHeaders;
  }

  _makeUrl(endpoint) {
    return `${this._baseUrl}${endpoint}`;
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
    return fetch(this._makeUrl(this._ingredientsEndpoint), options)
      .then(this._handleResponse);
  }
}

export const apiBurger = new Api(apiConfig);