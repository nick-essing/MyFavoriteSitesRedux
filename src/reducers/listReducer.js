import { CONCAT_DATA, SET_NULL, NEW_LIST } from '../actions/fetchData';

const fetchDataReducer = (state = { list: [] }, action) => {
    switch (action.type) {
        case CONCAT_DATA:
            return { list: state.list.concat(action.data) };
        case NEW_LIST:
            return { list: action.data };
        case SET_NULL:
            return { list: [] };
        default:
            return state;
    }
};

export default fetchDataReducer;
