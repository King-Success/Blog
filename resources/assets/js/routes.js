import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ArticlesIndex from './containers/articles_index';
import ShowArticle from './containers/article_show';


export default(
    <Route path="/" component={ App } >
        <IndexRoute component={ ArticlesIndex } /> 
        <Route path="show" component={ ShowArticle } />
    </Route>
    // <Route path="/show" component={}
);