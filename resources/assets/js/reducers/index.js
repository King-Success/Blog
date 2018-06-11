import {combineReducers} from 'redux';
import paginatedArticles from './reducer_paginated_articles';
import selectedArticle from './reducer_selected_article';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
//  console.log(PaginatedArticlesReducer);

const allReducers = combineReducers({
    
    paginatedArticles: paginatedArticles, 
    selectedArticle: selectedArticle,
    

});

export default allReducers
