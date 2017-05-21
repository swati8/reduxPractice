export function updatePost(comment,index) {
    return (dispatch) => {
        console.log("in action");
        dispatch({type:'UPDATE_FORM',data:comment});
    };
}

export function deletePost(index) {
    return (dispatch) => {
        console.log("in action");
        dispatch({type:'REMOVE_COMMENT',data:index});
    };
};
