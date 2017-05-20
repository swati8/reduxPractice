import React,{ Component} from 'react';
import { connect } from 'react-redux';
import {getAllPosts,updatePost,deletePost} from './listingAction';


class Listing extends Component {
    constructor() {
       super();
       this.USERS = "users";
       this.COMMENTS = "comments";

       this.state = {
           users : [],
           comments : []
       };
    }

    setValue = (key,value) => {
        this.setState({
            [`${key}`] : value
        });
    };

    componentWillReceiveProps(props) {
        console.log("componentWillReceiveProps", props);
        this.setValue(this.USERS,props.email);
        this.setValue(this.COMMENTS,props.comment);
    }

    render () {
            let users = this.state.users;
            let comments = this.state.comments;
        console.log(">>>>>", this.props);
        return(
            <div>
               <ul>
                   {
                       comments.length ?
                           comments.map(comment => <li key={comment.id}>{comment.email} - {comment.comment}</li>) :
                           <li>No Users Found.</li>
                   }
               </ul>
                <ul>
                   {
                       users.length ?
                           users.map((email,index) => <li key={index}>{email}</li>) : null
                   }
               </ul>
            </div>
        );
    }
};

const mapStateToProps1 = (state) => {console.log("state changeeeeeeed",state); return state.allComments;};

const mapDispatchToProps1 = (dispatch) => ({
    getPost : () => dispatch(getAllPosts()),
    updatePost : (comment,index) => dispatch(updatePost(comment,index)),
    deletePost : (index) => dispatch(deletePost(index))
});

export default connect(mapStateToProps1,mapDispatchToProps1)(Listing);
