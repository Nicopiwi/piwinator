export const guardar = (name, score) => dispatch => {
    dispatch({
        type: 'ADD_JUGADA',
        payload: { name, score }
    })
};
export const deleteAll = () => dispatch => {
    dispatch({
        type: 'DELETE_ALL',
    })
};