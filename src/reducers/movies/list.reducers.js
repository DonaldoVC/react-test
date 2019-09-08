import {LOADING_MOVIES, SUCCESS_MOVIES, ERROR_MOVIES} from '../../constants';

const initialState = {
    movies: [],
    loading: false,
    error: null
};

export default function listReducer(state = initialState, action){
    switch (action.type) {
        case LOADING_MOVIES:
            return {movies: [], loading: true, error: null};
        case SUCCESS_MOVIES:
            return {movies: [...action.movies], loading: false, error: null};
        case ERROR_MOVIES:
            return {movies: [], loading: false, error: action.error};
        default:
            return state;
    }
}
