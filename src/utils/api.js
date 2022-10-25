import { element } from "prop-types";
import { useSelector } from "react-redux";

export const apiConfig = {
  baseUrl: `https://norma.nomoreparties.space/api`,
  ingredients: '/ingredients',
  order: '/orders',
  defaultHeaders: {
    'Content-Type': 'application/json'
  }
}

class Api {
  constructor({ baseUrl, ingredients, order, defaultHeaders }) {
    this._baseUrl = baseUrl;
    this._ingredientsEndpoint = ingredients;
    this._orderEndpoint = order;
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

  requestOrderDetails() {
  //  const idList = (data.map(element => element._id))
    const options = {
      method: 'POST',
      headers: this._defaultHeaders,
      // body: JSON.stringify({
      //   // ingredients: idList
      //   "ingredients": ["609646e4dc916e00276b286e", "609646e4dc916e00276b2870"]
      // })
    }
    return fetch(this._makeUrl(this._orderEndpoint), options)
      .then(this._handleResponse);
  }
}

export const apiBurger = new Api(apiConfig);