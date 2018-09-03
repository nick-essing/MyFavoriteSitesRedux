
export const CONCAT_DATA = 'CONCAT_DATA';
export const concatData = data => ({
    type: CONCAT_DATA,
    data
});

export const fetchData = (link) => dispatch => {
    chayns.showWaitCursor();
    fetch(link)
        .then(res => res.json())
        .then(           
            data => {
                if (data !== null){
                    dispatch(concatData(data.Data))
                }
            }
        )
        .finally(() => chayns.hideWaitCursor());
};

