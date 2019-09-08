import {LOADING_INFO, SUCCESS_INFO, ERROR_INFO} from '../../constants';

const initialState = {
    info: [],
    loading: false,
    error: null
};

export default function infoReducer(state = initialState, action){
    switch (action.type) {
        case LOADING_INFO:
            return {info: [], loading: true, error: null};
        case SUCCESS_INFO:
            return {info: action.info, loading: false, error: null};
        case ERROR_INFO:
            return {info: [], loading: false, error: action.error};
        default:
            return state;
    }
}
