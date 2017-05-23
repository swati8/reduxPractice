let uniqueId = -1;

export function updatePost(post) {
    return (dispatch) => {
         dispatch({type:'EDIT_COMMENT',data:post});
        dispatch({type:'RESET_FORM'})
    };
}

export function addPost(post) {
    return (dispatch) => {
        let userPost = {
            id : ++uniqueId,
            email : post.email,
            comment : post.comment,
            date : Date.now()
        };
        dispatch({type:'ADD_COMMENT',data:userPost});
    };
}

