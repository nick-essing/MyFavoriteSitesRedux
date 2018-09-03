export const EMPTY = 'EMPTY';
export const empty = () => ({
    type: EMPTY
});

export const emptyList = () => dispatch => {
    dispatch(empty())
};
