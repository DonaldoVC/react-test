import {SEARCH_MOVIE, ERROR_MOVIE, LOADING_MOVIE} from '../../constants';

const initialState = {
    search: '',
    movies: [],
    error: null
};

export default function searchReducer(state = initialState, action){
    switch (action.type) {
        case LOADING_MOVIE:
            return {search: '', movies: [], loading: true, error: null};
        case SEARCH_MOVIE:
            return {search: action.movie, movies: [...action.movies], loading: false, error: null};
        case ERROR_MOVIE:
            return {search: '', movies: [], loading: false, error: action.error};
        default:
            return state;
    }
}
