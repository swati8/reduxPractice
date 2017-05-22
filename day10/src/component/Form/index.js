import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {addPost,updatePost} from './formAction';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class myForm extends Component {
    constructor () {
        super();
        this.EMAIL = "email";
        this.COMMENT = "comment";
        this.error = "error";
        this.edited = false;
        this.oldPost = {};

        this.state = {
            email : '',
            comment : '',
            error : ''
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
        if(!this.state.email || !(this.state.email).match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm)) {
            console.log("in error");
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
            this.setValue(this.error,"");

        }
    };

    componentWillReceiveProps(props) {
        if(props.post.email && props.post.comment) {
            this.edited = true;
            this.oldPost = props.post;
            document.getElementById("email").disabled = true;
            this.setValue(this.EMAIL,props.post.email);
            this.setValue(this.COMMENT,props.post.comment);
        }
    }

    render () {
        return(
            <Form style={{background:"#ccffff"}}>
               <FormGroup>
                   <Label>EMAIL : </Label>
                  <Input type="email" value={this.state.email} placeholder="Enter your email"
                     id="email" onChange={(e) => {this.changeHandler(this.EMAIL,e)}}
                    style={{'width': '500px'}}/>
                   {(this.state.error == this.EMAIL)?<Label>Invalid EMAIL</Label>:null}
               </FormGroup>
                <FormGroup>
                    <Label>COMMENT : </Label>
                    <Input type="textarea" value={this.state.comment} placeholder="What's in your mind"
                           id="comment" onChange={(e) => {this.changeHandler(this.COMMENT,e)}}
                           style={{'width': '500px'}}/>
                    {(this.state.error === this.COMMENT)?<div>Comment cannot be blank</div>:null}
                </FormGroup>
                <Button color="primary" type="submit" onClick={this.submitPost}>
                    Submit
                </Button>
            </Form>
        );
    }
}

const mapStateToProps = (state) => state.updateForm;

const mapDispatchToProps = (dispatch) => ({
    addPost : (comment) => dispatch(addPost(comment)),
    updatePost : (post) => dispatch(updatePost(post))
});

export default connect(mapStateToProps,mapDispatchToProps)(myForm);
