const app = {
    email : [],
    comment : [],
    postFilter : {
        filtered : false,
        email : null
    }
};

export default (state = app,action) => {
    let comment = [...state.comment];
    let email = [...state.email];
    switch (action.type) {
        case 'ADD_COMMENT' :
            comment.unshift(action.data);
            if(state.email.indexOf(action.data.email) < 0) {
                email.unshift(action.data.email);
            }
            return {...state,comment,email};
        case 'REMOVE_COMMENT' :
            let deleteComment = comment.splice(action.data,1);
            let index = comment.findIndex(x => x.email === deleteComment[0].email);
            if(index < 0) {
                email.splice(index,1);
            }
            return {...state,comment,email};
        case 'EDIT_COMMENT' :
            comment[action.data.index].comment = action.data.comment;
            return {...state,comment};
        case 'FILTER_POST' :
            let postFilter = {};
            postFilter.filtered = true;
            postFilter.email = action.data;
            return {...state,postFilter};
        case 'RESET_FILTER' :
            postFilter = {};
            postFilter.filtered = false;
            postFilter.email = null;
            return {...state,postFilter};
    }
    return state;
};