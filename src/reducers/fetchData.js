import { SAVE_DATA } from '../actions/fetchData';

const fetchData = (state = {sites: []}, action) => {
    switch (action.type) {
        case SAVE_DATA:
            return action.data;
        default:
            return state;
    }
};

export default fetchData;
