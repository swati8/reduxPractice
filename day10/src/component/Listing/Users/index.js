import React from 'react';
import {connect} from 'react-redux';
import ListAction from '../listingAction';
import AppConstant from '../../../config/constant';

import {ListGroupItem} from 'reactstrap';

const User = (props) => {

    let filterPost = () => {
        if(props.index >= 0) {
            props.filterPost(props.email);
        } else {
            props.resetFilter();
        }
    };

    return(
       <ListGroupItem onClick={filterPost}>
           {props.email}
       </ListGroupItem>
    )
};

const mapDispatchToProps = (dispatch) => ({
    resetFilter : () => dispatch(ListAction(AppConstant.RESET_FILTER)),
    filterPost: (email) => dispatch(ListAction(AppConstant.FILTER_POST,email))
});

//export default User;
export default connect(null, mapDispatchToProps)(User);