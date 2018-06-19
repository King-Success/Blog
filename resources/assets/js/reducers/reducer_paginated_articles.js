import { PAGINATED_ARTICLES } from '../actions/index';
//Thou shalt not be confussed again, the app state is automatically passed, in case it isnt (it doesnt exist), this
//empty one is used
const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  
    switch(action.type) {
        case PAGINATED_ARTICLES:
          return action.payload;

        default:
          return state;
    }
    return state;
} 
