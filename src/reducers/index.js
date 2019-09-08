import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'
import listReducer from './movies/list.reducers';
import infoReducer from './movies/info.reducers';
import searchReducer from './movies/search.reducers';

export const rootReducer = combineReducers({
    dataMovies: listReducer,
    infoMovie: infoReducer,
    searchInfo: searchReducer,
    form: formReducer
});
