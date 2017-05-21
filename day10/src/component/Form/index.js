import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {addPost,updatePost} from './formAction';

class Form extends Component {
    constructor () {
        super();
        this.EMAIL = "email";
        this.COMMENT = "comment";
        this.error = "";
        this.edited = false;
        this.oldPost = {};

        this.state = {
            email : '',
            comment : '',
        };

    }

    changeHandler = (key,e) => {
        this.setValue(key,e.target.value);
    };

    setValue = (key,value) => {
        this.setState({
            [`${key}`] : value
        });
    };

    validateForm = () => {
        if(!(this.state.email).match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm)) {
            this.setValue(this.error,this.EMAIL);
            return false;
        } else if(this.state.comment == "") {
            this.setValue(this.error,this.COMMENT);
            return false;
        }
        return true;
    };

    submitPost = (e) => {
        e.preventDefault();
        console.log(">..........");

        //validateform
        let validation = this.validateForm();

        if(validation) {
            if(this.edited) {
                let newPost = this.oldPost;
                newPost.comment = this.state.comment;
                this.props.updatePost(newPost);
                this.edited = false;
            } else {
                this.props.addPost({
                    email : this.state.email,
                    comment : this.state.comment
                });
            }
            this.setValue(this.COMMENT,"");
            this.error = '';
        }
    };

    componentWillReceiveProps(props) {
        if(props.post.email && props.post.comment) {
            this.edited = true;
            this.oldPost = props.post;
            this.setValue(this.EMAIL,props.post.email);
            this.setValue(this.COMMENT,props.post.comment);
        }
    }

    render () {
        return(
            <form>
                <input type="email" value={this.state.email} placeholder="Enter your email"
                       onChange={(e) => {this.changeHandler(this.EMAIL,e)}}/>
                {(this.error === this.EMAIL)?<div>Invalid EMAIL</div>:null}

                <input type="text" value={this.state.comment} placeholder="What's in your mind"
                       onChange={(e) => {this.changeHandler(this.COMMENT,e)}}/>
                {(this.error === this.COMMENT)?<div>Comment cannot be blank</div>:null}

                <input type="submit" onClick={this.submitPost}/>
            </form>
        );
    }
}

const mapStateToProps = (state) => state.updateForm;

const mapDispatchToProps = (dispatch) => ({
    addPost : (comment) => dispatch(addPost(comment)),
    updatePost : (post) => dispatch(updatePost(post))
});

export default connect(mapStateToProps,mapDispatchToProps)(Form);
