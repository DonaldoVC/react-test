import axios from 'axios';
import * as constants from '../constants';

const config = require('../config').config;

export function getMovies(){
    return async (dispatch) => {
        try {
            dispatch({
                type: constants.LOADING_MOVIES
            });
            const response = await axios.get(config.MOVIE_LIST);
            dispatch({
                type: constants.SUCCESS_MOVIES,
                movies: response.data.response.groups
            });
        }catch (e) {
            dispatch({
                type: constants.ERROR_MOVIES,
                error: e
            });
        }
    }
}

export function getInfo(id){
    return async (dispatch) => {
        try {
            dispatch({
                type: constants.LOADING_INFO
            });
            const response = await axios.get(config.MOVIE_INFO + id);
            dispatch({
                type: constants.SUCCESS_INFO,
                info: response.data.response.group.common
            });
        }catch (e) {
            dispatch({
                type: constants.ERROR_INFO,
                error: e
            });
        }
    }
}

export function findMovie(name) {
    return async (dispatch) => {
        try {
            dispatch({
                type: constants.LOADING_MOVIE,
                movie: name
            });
            const response = await axios.get(config.MOVIE_LIST);
            dispatch({
                type: constants.SEARCH_MOVIE,
                movies: response.data.response.groups,
                movie: name
            });
        } catch (e) {
            console.log(e);
            dispatch({
                type: constants.ERROR_MOVIE,
                error: e
            });
        }
    }
}
