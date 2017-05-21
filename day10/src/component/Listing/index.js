import React,{ Component} from 'react';
import { connect } from 'react-redux';
import {getAllPosts,updatePost,deletePost} from './listingAction';
import Post from './Posts';
import User from './Users';

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

    deletePost(index) {
        this.props.deletePost(index);
    }

    editPost(index) {

    }

    render () {
            let users = this.state.users;
            let comments = this.state.comments;

        return (
            <div>
               <ul>
                   {
                       comments.length ?
                           comments.map(comment => (
                           <li key={comment.id}>
                               {comment.email} - {comment.comment}
                               <button onClick={() => this.editPost(comment.id)}>edit</button>
                               <button onClick={() => this.deletePost(comment.id)}>delete</button>
                           </li>
                           )) :
                           <li>No Users Found.</li>
                   }
               </ul>
                <ul>
                   {
                       users.length ?
                           users.map((email,index) => <User key={index} email={email} />) : null
                   }
               </ul>
            </div>
        );
    }
};

const mapStateToProps1 = (state) => state.allComments;

const mapDispatchToProps1 = (dispatch) => ({
    updatePost : (comment,index) => dispatch(updatePost(comment,index)),
    deletePost : (index) => dispatch(deletePost(index))
});

export default connect(mapStateToProps1,mapDispatchToProps1)(Listing);
