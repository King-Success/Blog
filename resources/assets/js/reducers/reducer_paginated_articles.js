import { PAGINATED_ARTICLES } from '../actions/index';
const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
    // console.log(action);

    // if(action.type === PAGINATED_ARTICLES ){
    //     return action.payload.data;
    // }else{
    //     return INITIAL_STATE;
    // }

    switch(action.type) {
        case PAGINATED_ARTICLES:
          return action.payload.data;
        default:
          return state;
    }
    return state;
} 
