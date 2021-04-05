import { Action } from '@ngrx/store'

const initialState = {
  Ingredients: []
};
export function listReducer(state = initialState, action:Action){
  switch(action.type){
    case 'ADD_INGREDIENT': return{...state}; //return to the state and never change to existing state. 
  };
}