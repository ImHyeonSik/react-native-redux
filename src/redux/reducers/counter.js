import * as types from '../action/ActionTypes';

const initialState = {
  number: 0, mainNumber: 0,
};

export default function counter(state = initialState, action){

  switch (action.type){
    case types.INCREMENT:
      return {...state, number: state.number + state.mainNumber};
    case types.DECREMENT:
      return {...state, number: state.number - state.mainNumber};
    case types.MAININCREMENT:
      return {...state, mainNumber: state.mainNumber + 1};
    case types.MAINDECREMENT:
      return {...state, mainNumber: state.mainNumber - 1};
    default:
      return state;
  }
}
