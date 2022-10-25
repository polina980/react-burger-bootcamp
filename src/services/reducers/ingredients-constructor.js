import { GET_CONSTRUCTOR_LIST } from '../actions/ingredients-constructor';

export const ingredientsConstructorState = {
  constructorList: []
}

export const constructorListReducer = (state = ingredientsConstructorState, action) => {
  switch (action.type) {
    case GET_CONSTRUCTOR_LIST: {
      return {
        ...state,

      }
    }
    default: {
      return state;
    }
  }
}