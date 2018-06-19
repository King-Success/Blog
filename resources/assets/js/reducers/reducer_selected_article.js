import { SELECTED_ARTICLE } from '../actions/index';
//Thou shalt not be confussed again, the app state is automatically passed, in case it isnt (it doesnt exist), this
//empty one is used
const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
//   console.log(action);
    switch(action.type) {
        case SELECTED_ARTICLE:
          return action.payload.data;

        default:
          return state;
    }
    return state;
} 
