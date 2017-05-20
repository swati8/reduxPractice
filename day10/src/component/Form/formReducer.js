const form = {
  email : [],
    comment : []
};

export default (state = form,action) => {
    let comment,email;
    console.log("in reducer");
    switch (action.type) {
        case 'GET_COMMENT' : return state;
        case 'ADD_COMMENT' :
             comment = [...state.comment];
             email = [...state.email];
            comment.unshift(action.data);
            if(state.email.indexOf(action.data.email) < 0) {
                email.unshift(action.data.email);
            }
            return {...state,comment,email};
        case 'REMOVE_COMMENT' :
            comment = state.comment;
            email = state.email;
            comment.splice(action.data.id,1);
            let index = comment.findIndex(x => x.email === action.data.email);
            if(index < 0) {
                email.splice(action.data.email);
            }
            return {...state,comment,email};
        case 'EDIT_COMMENT' :
            comment = state.comment;
            comment[action.data.id].comment = action.comment;
            return {...state,comment};
    }
    return state;
};