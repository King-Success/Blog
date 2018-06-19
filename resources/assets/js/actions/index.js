//This houses all of my action creators
import axios from 'axios';

export const PAGINATED_ARTICLES = 'PAGINATED_ARTICLES';
export const SELECTED_ARTICLE = 'SELECTED_ARTICLE';
// export const NEXT_PAGINATED_ARTICLES = 'NEXT_PAGINATED_ARTICLES'
 

export const fetchPaginatedArticles = (url = '/api/articles/paginate') => {
    const request = axios.get(url);

    return {
        type: PAGINATED_ARTICLES, 
        payload: request
    };
}

export const fetchSelectedArticle = (id) => {
    const request = axios.get(`/api/articles/${id}`);

    return {
        type: SELECTED_ARTICLE, 
        payload:request
    }
}


