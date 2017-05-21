import React from 'react';

import {ListGroupItem} from 'reactstrap';

export default (props) => {

    return(
       <ListGroupItem>
           {props.email}
       </ListGroupItem>
    )
}