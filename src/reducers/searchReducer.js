import { SEARCHSTRING } from '../actions/search';

const searchReducer = (state = { searchString: 'love' }, action) => {
    switch (action.type) {
        case SEARCHSTRING:
            return { searchString: action.data };
        default:
            return state;
    }
};

export default searchReducer;
