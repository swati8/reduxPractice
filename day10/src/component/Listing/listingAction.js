export function getAllPosts() {
    return (dispatch) => {
        console.log("in action");
        dispatch({type:'GET_COMMENT'});
    };
}

export function updatePost(comment,index) {
    return (dispatch) => {
        console.log("in action");
        dispatch({type:'EDIT_COMMENT',data:{comment,index}});
    };
}

export function deletePost(index) {
    return (dispatch) => {
        console.log("in action");
        dispatch({type:'REMOVE_COMMENT',data:index});
    };
};

/*
* export updatePost = () => {
 }
*
* */