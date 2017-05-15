import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import  Footer from '../Footer';
import Header from '../Header';
import Form from "../Form";
import Home from  "../Home";
/*export default () => (
    <div>App component !!!</div>
);*/

export default class App extends Component {
    constructor () {
        super();
    }

   /* changeHandler = e => {
		this.setState({
			textInput :e.target.value
		});
	}*/

    render () {
        return (
				<Router>
            <div>
				App Component
<Link to="/header/swati">Swati </Link>
<Link to="/header/arun">Arun </Link>
<Link to="/footer">Footer </Link>
				<Route exact path="/" component={Form}></Route>
<Route path="/header/:firstName" component={Header}></Route>
<Route path="/footer" render={props => (<Footer {...props} lastName="asdhjgjashjdf"/>)}></Route>

</div>
				</Router>
        )
    }
}
