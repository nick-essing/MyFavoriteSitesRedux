import { CONCAT_DATA, SET_NULL } from '../actions/fetchData';
import { EMPTY } from '../actions/emptyList';

const fetchDataReducer = (state = { list: [] }, action) => {
    switch (action.type) {
        case CONCAT_DATA:
            return { list: state.list.concat(action.data) };
        case SET_NULL:
            return { list: [] };
        case EMPTY:
            return { list: [] };
        default:
            return state;
    }
};

export default fetchDataReducer;
