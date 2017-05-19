let uniqueId = 0;

export default (post) => {
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

