
export const CONCAT_DATA = 'CONCAT_DATA';
export const concatData = data => ({
    type: CONCAT_DATA,
    data
});

export const SET_NULL= 'SET_NULL';
export const setNull = () => ({ type: SET_NULL });

export const fetchData = (link) => dispatch => {
    chayns.showWaitCursor();
    fetch(link)
        .then(res => res.json())
        .then(           
            data => {
                console.log('data', data);
                if (data.Data !== null){
                    dispatch(concatData(data.Data))
                }else{
                    dispatch(setNull())
                }
            }
        )
        .finally(() => chayns.hideWaitCursor());
};

