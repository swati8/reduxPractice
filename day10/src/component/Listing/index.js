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
        console.log("componentWillReceiveProps", props);
        this.setValue(this.USERS, props.email);
        this.setValue(this.COMMENTS, props.comment);
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
                                {
                                    users.length ?
                                        users.map((email, index) => <User key={index} email={email}/>) : null
                                }
                            </ListGroup></th>
                        <th>
                            <ListGroup>
                                {
                                    comments.length ?
                                        comments.map(comment => (
                                            <ListGroupItem key={comment.id}>
                                                {comment.email} - {comment.comment}
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Button color="info" onClick={() => this.editPost(comment.id, comment)}>EDIT</Button>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Button color="danger" onClick={() => this.deletePost(comment.id)}>DELETE</Button>
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
