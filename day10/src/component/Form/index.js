import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addUser from './formAction';

class Form extends Component {
    constructor () {
        super();
        this.EMAIL = "email";
        this.COMMENT = "comment";
        this.ERROR = "error";
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

    reSetValue = () => {
        this.setState({
            comment : '',
            error : ''
        });
    };

    validateForm = () => {
        if(!(this.state.email).match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm)) {
            this.setValue(this.ERROR,this.EMAIL);
            return false;
        } else if(this.state.comment == "") {
            this.setValue(this.ERROR,this.COMMENT);
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
            this.props.addPost({
                email : this.state.email,
                comment : this.state.comment
            });
            this.reSetValue();
        }
    };

    render () {
        return(
            <form>
                <input type="email" value={this.state.email} placeholder="Enter your email"
                       onChange={(e) => {this.changeHandler(this.EMAIL,e)}}/>
                {(this.state.error === this.EMAIL)?<div>Invalid EMAIL</div>:null}

                <input type="text" value={this.state.comment} placeholder="What's in your mind"
                       onChange={(e) => {this.changeHandler(this.COMMENT,e)}}/>
                {(this.state.error === this.COMMENT)?<div>Comment cannot be blank</div>:null}

                <input type="submit" onClick={this.submitPost}/>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addPost : (comment) => dispatch(addUser(comment))
});

export default connect(null,mapDispatchToProps)(Form);
