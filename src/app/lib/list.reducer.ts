import { Action } from '@ngrx/store';

const initialState = {
  ingredients: []
};
export function listReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return { ...state, ingredients: [...state.ingredients, action.type] }; //return to the state and never change to existing state.
  }
}
