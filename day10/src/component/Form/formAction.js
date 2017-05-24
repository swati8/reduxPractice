import AppConstant from '../../config/constant';

let uniqueId = -1;

export function updatePost(post) {
    return (dispatch) => {
         dispatch({type:AppConstant.EDIT_COMMENT,data:post});
        dispatch({type:AppConstant.RESET_FORM})
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
        dispatch({type:AppConstant.ADD_COMMENT,data:userPost});
    };
}

