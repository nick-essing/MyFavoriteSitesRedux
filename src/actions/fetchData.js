
export const SAVE_DATA = 'SAVE_DATA';
export const saveData = data => ({
    type: SAVE_DATA,
    data
});

export const fetchData = (link) => (dispatch) => {
    chayns.showWaitCursor();
    fetch(link)
        .then(res => res.json())
        .then(data => dispatch(saveData(data)))
        .finally(() => chayns.hideWaitCursor());

};
