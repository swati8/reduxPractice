let uniqueId = -1;

export function updatePost(post) {
    return (dispatch) => {
        console.log("in action");
         dispatch({type:'EDIT_COMMENT',data:post});
        dispatch({type:'RESET_FORM'})
    };
}

export function addPost(post) {
    return (dispatch) => {
        console.log("in action");
        let userPost = {
            id : ++uniqueId,
            email : post.email,
            comment : post.comment,
            date : Date.now()
        };
        dispatch({type:'ADD_COMMENT',data:userPost});
    };
}

