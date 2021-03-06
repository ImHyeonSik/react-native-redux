import * as types from '../action/ActionTypes';

const initialState = {
  color: [255, 255, 255]
};

export default function ui(state = initialState, action){

  switch (action.type){
    case "SET_COLOR":
      return {...state, color: action.color};
    default :
      return state;
  }
}
