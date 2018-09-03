import { combineReducers } from 'redux';

import listReducer from './listReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    listReducer, searchReducer
});
