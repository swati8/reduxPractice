import React, {Component} from 'react';
import  Footer from '../Footer';
import Header from '../Header';
import Form from "../Form";
import Listing from  "../Listing";

export default class App extends Component {
    constructor() {
        super();
    }

    /* changeHandler = e => {
     this.setState({
     textInput :e.target.value
     });
     }*/

    render() {
        return (
            <div>
                <Header/>
                <Form />
                <Footer/>
            </div>

        )
    }
}
