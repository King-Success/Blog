import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import PaginatedArticlesReducer from './reducer_paginated_articles';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
//  console.log(PaginatedArticlesReducer);

const allReducers = combineReducers({
    
    users: UserReducer,
    activeUser: ActiveUserReducer,
    paginatedArticles: PaginatedArticlesReducer
    

});

export default allReducers
