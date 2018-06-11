import { SELECTED_ARTICLE } from '../actions/index';
const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  console.log(action);
    switch(action.type) {
        case SELECTED_ARTICLE:
          return action.payload.data;

        default:
          return state;
    }
    return state;
} 
