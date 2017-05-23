export default (type,data) => {
    return (dispatch) => {
        dispatch({type,data});
    }
}
