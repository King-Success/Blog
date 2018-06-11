//This houses all of my action creators
import axios from 'axios';

export const PAGINATED_ARTICLES = 'PAGINATED_ARTICLES';

export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const fetchPaginatedArticles = () => {
    const request = axios.get('/api/articles/paginate');

    return {
        type: 'PAGINATED_ARTICLES', 
        payload: request
    };
}
