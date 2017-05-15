import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Form extends Component {
    constructor () {
        super();
        this.state = {
            textInput : '111'
        };
        this.changeHandler = (key,e) => {
            this.setState({
                [`${key}`] :e.target.value
            });
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.props.history.push('header')
    }

    render () {
        return(
            <form>
                <input type="text" value={this.state.textInput}
                       onChange={(e) => {this.changeHandler('textInput',e)}}/>

                <input type="text" value={this.state.name}
                       onChange={(e) => {this.changeHandler('name',e)}}/>

                <input type="text" value={this.state.lastName}
                       onChange={(e) => {this.changeHandler('lastName',e)}}/>
                <input type="submit" onClick={this.handleChange}/>
            </form>
        );
    }
}

export default withRouter(Form)