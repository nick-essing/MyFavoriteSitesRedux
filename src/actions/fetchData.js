
export const CONCAT_DATA = 'CONCAT_DATA';
export const concatData = data => ({
    type: CONCAT_DATA,
    data
});

export const SET_NULL = 'SET_NULL';
export const setNull = () => ({ type: SET_NULL });

export const fetchData = (searchString, skip, take) => (dispatch) => {
    chayns.showWaitCursor();
    fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${searchString}&Skip=${skip}&Take=${take}`)
        .then(res => res.json())
        .then((data) => {
                if (data.Data !== null) {
                    dispatch(concatData(data.Data));
                } else {
                    dispatch(setNull());
                }
            })
        .finally(() => chayns.hideWaitCursor());
};

