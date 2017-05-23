export function updatePost(comment,index) {
    return (dispatch) => {
        dispatch({type:'UPDATE_FORM',data:comment});
    };
}

export function deletePost(index) {
    return (dispatch) => {
        dispatch({type:'REMOVE_COMMENT',data:index});
    };
};

export function filterPost (email) {
    return (dispatch) => {
        dispatch({type:'FILTER_POST',data:email})
    }
}

export function resetFilter (email) {
    return (dispatch) => {
        dispatch({type:'RESET_FILTER',data:email})
    }
}