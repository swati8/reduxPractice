import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllPosts, updatePost, deletePost} from './listingAction';
import Post from './Posts';
import User from './Users';

import {Button, ListGroup, ListGroupItem, Table} from 'reactstrap';

class Listing extends Component {
    constructor() {
        super();
        this.USERS = "users";
        this.COMMENTS = "comments";

        this.state = {
            users: [],
            comments: []
        };
    }

    setValue = (key, value) => {
        this.setState({
            [`${key}`]: value
        });
    };

    componentWillReceiveProps(props) {
        let comment;
        this.setValue(this.USERS, props.email);
        comment = (props.postFilter.filtered)?
            (props.comment.filter((post) => post.email === props.postFilter.email)):
            [...props.comment];
        this.setValue(this.COMMENTS, comment);
    }

    deletePost(index) {
        this.props.deletePost(index);
    }

    editPost(index, comment) {
        this.props.updatePost(index, comment)
    }

    render() {
        let users = this.state.users;
        let comments = this.state.comments;

        return (
            <div style={{background: "#99ffcc"}}>
                <Table>
                    <thead>
                    <tr>
                        <th>
                            <ListGroup>
                                <User key={-1} index={-1} email="All"/>
                                {
                                    users.length ?
                                        users.map((email, index) => <User key={index} index={index} email={email}/>) : null
                                }
                            </ListGroup>
                        </th>
                        <th>
                            <ListGroup>
                                {
                                    comments.length ?
                                        comments.map((comment,index) => (
                                            <ListGroupItem key={index}>
                                                {comment.email} - {comment.comment}
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Button color="info" onClick={() => this.editPost(index, comment)}>EDIT</Button>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Button color="danger" onClick={() => this.deletePost(index)}>DELETE</Button>
                                            </ListGroupItem>
                                        )) :
                                        <ListGroupItem>No Users Found.</ListGroupItem>
                                }
                            </ListGroup>
                        </th>
                    </tr>
                    </thead>
                </Table>
            </div>
        );
    }
}

const mapStateToProps1 = (state) => state.allComments;

const mapDispatchToProps1 = (dispatch) => ({
    updatePost: (index, comment) => dispatch(updatePost(comment, index)),
    deletePost: (index) => dispatch(deletePost(index))
});

export default connect(mapStateToProps1, mapDispatchToProps1)(Listing);
