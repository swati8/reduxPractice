const form = {
    updateForm : false,
    post : {}
};

export default (state = form,action) => {
    let comment,email;
    switch (action.type) {
        case 'UPDATE_FORM' :
                let updateForm = true;
                let post = action.data;
            return {updateForm,post};
        case 'RESET_FORM' :
            updateForm = false;
            post = {};
            return {updateForm,post};
    }
    return state;
};
