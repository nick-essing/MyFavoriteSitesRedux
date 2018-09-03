export const SEARCHSTRING = 'SEARCHSTRING';
export const searchString = data => ({
    type: SEARCHSTRING,
    data
});

export const search = (value) => dispatch => {dispatch(searchString(value))};
