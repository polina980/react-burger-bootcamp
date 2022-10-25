import { SET_INGREDIENT_DETAILS, DELETE_INGREDIENT_DETAILS } from '../actions/ingredient-details';

export const ingredientDetailsState = {
  ingredientDetails: {}
}

export const ingredientDetailsReducer = (state = ingredientDetailsState, action) => {
  switch (action.type) {
    case SET_INGREDIENT_DETAILS: {
      return {
        ...state,

      }
    }
    case DELETE_INGREDIENT_DETAILS: {
      return {
        ...state,

      }
    }
    default: {
      return state;
    }
  }
}