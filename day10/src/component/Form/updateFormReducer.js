import AppConstant from '../../config/constant';

const form = {
    updateForm : false,
    post : {}
};

export default (state = form,action) => {
    let comment,email;
    switch (action.type) {
        case AppConstant.UPDATE_FORM :
                let updateForm = true;
                let post = action.data;
            return {updateForm,post};
        case AppConstant.RESET_FORM :
            updateForm = false;
            post = {};
            return {updateForm,post};
    }
    return state;
};
