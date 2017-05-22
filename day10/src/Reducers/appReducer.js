const app = {
  email : [],
    comment : []
};

export default (state = app,action) => {
    let comment,email;
    console.log("in reducer");
    switch (action.type) {
        case 'ADD_COMMENT' :
             comment = [...state.comment];
             email = [...state.email];
            comment.unshift(action.data);
            if(state.email.indexOf(action.data.email) < 0) {
                email.unshift(action.data.email);
            }
            return {...state,comment,email};
        case 'REMOVE_COMMENT' :
            comment = [...state.comment];
            email = [...state.email];
            let deleteComment = comment.splice(action.data,1);
            let index = comment.findIndex(x => x.email === deleteComment[0].email);
            if(index < 0) {
                email.splice(index,1);
            }
            return {...state,comment,email};
        case 'EDIT_COMMENT' :
            comment = [...state.comment];
            comment[action.data.index].comment = action.data.comment;
            return {...state,comment};
    }
    return state;
};