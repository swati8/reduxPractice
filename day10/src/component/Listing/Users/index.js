import React from 'react';
import {connect} from 'react-redux';
import {filterPost,resetFilter} from '../listingAction';

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
    resetFilter : () => dispatch(resetFilter()),
    filterPost: (email) => dispatch(filterPost(email))
});

//export default User;
export default connect(null, mapDispatchToProps)(User);